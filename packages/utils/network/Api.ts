import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosHeaders,
} from "axios";
import { CustomRequestConfig, HttpHeaders } from "../types";
import Auth from "../auth/Auth";
import NetworkError from "./NetworkError";
import { encode } from "../util";
import qs from "qs";
import _ from "lodash";

const TAG = "@butterfly/utils/network/Api";

export const ERROR_RESPONSE_401 = 401;
export const ERROR_RESPONSE_403 = 403;
export const ERROR_RESPONSE_404 = 404;
export const ERROR_RESPONSE_503 = 503;
export const ERROR_NETWORK = 1000;
export const ERROR_RESPONSE_FORMAT = 1001;

export enum ContentType {
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  MULTIPART_FORM_DATA = "multipart/form-data",
  APPLICATION_JSON = "application/json",
}

export interface HttpOptions {
  baseURL?: string;
  timeout?: number;
}

class Api {
  public static DEFAULT_OPTIONS = {
    timeout: 5000,
  };

  /**
   * 生成options
   * @param httpOptions 配置
   */
  public static generateOptions(httpOptions?: HttpOptions): HttpOptions {
    const options = Object.assign({}, Api.DEFAULT_OPTIONS, httpOptions);
    return options;
  }

  /**
   * Generates data 根据contentType生成data
   * @param data
   * @returns data
   */
  public static generateData(
    data: {
      [propName: string]: any;
    },
    contentType: string | number | true | AxiosHeaders | string[]
  ): string | undefined | FormData {
    if (contentType === ContentType.FORM_URLENCODED) {
      return qs.stringify(data);
    }

    if (contentType === ContentType.MULTIPART_FORM_DATA) {
      const formData = new FormData();
      Api.makeFormData(data, formData);
      return formData;
    }

    if (contentType === ContentType.APPLICATION_JSON) {
      return JSON.stringify(data);
    }
  }

  /**
   * 生成FormData处理文件数据
   * @param obj 对象数据
   * @param formData FormData实例
   */
  public static makeFormData(obj: any, formData?: FormData) {
    const data = [];
    if (obj instanceof File) {
      data.push({ key: "", value: obj });
    } else if (obj instanceof Array) {
      for (let j = 0, len = obj.length; j < len; j++) {
        const arr: any = Api.makeFormData(obj[j]);
        for (let k = 0, l = arr.length; k < l; k++) {
          const key = !!formData ? j + arr[k].key : "[" + j + "]" + arr[k].key;
          data.push({ key, value: arr[k].value });
        }
      }
    } else if (typeof obj === "object") {
      Object.keys(obj).forEach((j) => {
        const arr: any = Api.makeFormData(obj[j]);
        for (let k = 0, l = arr.length; k < l; k++) {
          const key = !!formData ? j + arr[k].key : "[" + j + "]" + arr[k].key;
          data.push({ key, value: arr[k].value });
        }
      });
    } else {
      data.push({ key: "", value: obj });
    }
    if (!!formData) {
      for (let i = 0, len = data.length; i < len; i++) {
        formData.append(data[i].key, data[i].value);
      }
    } else {
      return data;
    }
  }

  public contentType: ContentType = ContentType.FORM_URLENCODED;
  public httpOptions?: HttpOptions;
  private options: HttpOptions;
  private agent: AxiosInstance;
  public readonly auth: Auth;

  constructor(httpOptions?: HttpOptions) {
    this.auth = new Auth();

    this.httpOptions = httpOptions;
    this.options = Api.generateOptions(httpOptions);
    const { timeout } = this.options;
    this.agent = axios.create({
      timeout,
    });

    this.agent.interceptors.request.use(
      (requestConfig): AxiosRequestConfig => {
        const config = this.requestHandler(
          requestConfig as CustomRequestConfig
        );
        return config;
      },
      (error) => {
        console.log(TAG, error);
      }
    );
    this.agent.interceptors.response.use(
      (response: AxiosResponse) => {
        return this.responseHandler(response);
      },
      (error) => {
        return this.errorHandler(error);
      }
    );
  }

  /**
   * Requests api 发送请求
   * @template R
   * @param requestConfig
   * @returns request
   */
  public request<R>(requestConfig: CustomRequestConfig): Promise<R> {
    if (!requestConfig.baseURL) {
      requestConfig.baseURL = this.httpOptions?.baseURL;
    }

    if (!requestConfig.baseURL) {
      throw new Error("invalid baseURL");
    }

    return this.agent.request(requestConfig);
  }

  /**
   * 获取header
   */
  public getHeaders(): HttpHeaders {
    const token = this.auth.getToken();

    const headers: HttpHeaders = {};

    if (token) {
      headers.Authorization = token;
    }

    return headers;
  }

  /**
   * 默认处理401、403、404
   * @param error 请求错误
   */
  public errorHandler(error: AxiosError) {
    if (error.response) {
      if (error.response.status === 403) {
        return Promise.reject(
          new NetworkError(ERROR_RESPONSE_403, "403 NO ACCESS")
        );
      }
      if (error.response.status === 401) {
        return Promise.reject(
          new NetworkError(ERROR_RESPONSE_401, "401 Unauthorized")
        );
      }
      if (error.response.status === 404) {
        return Promise.reject(
          new NetworkError(ERROR_RESPONSE_404, "404 Not Found")
        );
      }
      if (error.response.status === 503) {
        return Promise.reject(
          new NetworkError(ERROR_RESPONSE_404, "Service Unavailable")
        );
      }
    }
    return Promise.reject(new NetworkError(ERROR_NETWORK, "network error"));
  }

  /**
   * 默认返回格式
   * 正确：{ state: 1, data: xx }
   * 错误：{ state: 1001, msg: 'xxxx'}
   * @param response http请求返回
   */
  public responseHandler(response: AxiosResponse): any {
    if (!response.data) {
      return Promise.reject(new NetworkError(ERROR_RESPONSE_FORMAT, "no data"));
    }

    const res = response.data;
    debugger;
    if (!res.hasOwnProperty("state") && !res.hasOwnProperty("ret")) {
      return Promise.reject(
        new NetworkError(
          ERROR_RESPONSE_FORMAT,
          "error response format, should like {state: xx, data: xx}"
        )
      );
    }

    if (res.state !== 1) {
      return Promise.reject(new NetworkError(res.state, res.msg));
    }

    // 有其它返回数据直接返回
    for (const key of Object.keys(res)) {
      if (!["state", "ret", "code", "message", "msg", "data"].includes(key)) {
        return res;
      }
    }

    return res.data;
  }

  /**
   * 默认header中Authorization带token
   * @param requestConfig 请求配置
   */
  public requestHandler(
    requestConfig: CustomRequestConfig,
    contentType: ContentType = ContentType.FORM_URLENCODED
  ): CustomRequestConfig {
    const headers = this.getHeaders();
    const traceCustom = requestConfig.traceCustom || {};

    const traceCustomStr = Object.keys(traceCustom)
      .map((key) => {
        const val = traceCustom[key];
        return `${key}:${encode(val)}`;
      })
      .join(",");

    const customHeaders: {
      "X-Trace-Custom"?: string;
      "accept-language"?: string;
    } = {
      // "accept-language": this.getLocale()
    };
    if (traceCustomStr) {
      customHeaders["X-Trace-Custom"] = traceCustomStr;
    }

    requestConfig.headers = Object.assign(
      requestConfig.headers || {},
      headers,
      customHeaders
    );

    if (!requestConfig.params) {
      requestConfig.params = {};
    }

    requestConfig.headers["Content-Type"] =
      requestConfig.headers["Content-Type"] || contentType;
    requestConfig.data = Api.generateData(
      requestConfig.data,
      requestConfig.headers["Content-Type"]
    );
    return requestConfig;
  }
}

export default Api;
