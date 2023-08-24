import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { CustomRequestConfig, HttpHeaders } from "../types";
import Auth from "../auth/Auth";

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
    const idgHeaders = this.getHeaders();
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
      requestConfig.headers,
      idgHeaders,
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
