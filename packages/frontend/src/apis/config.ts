import { Log } from "@butterfly/utils";
import axios from "axios";

export const baseUrl = "http://localhost:80";

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    Log.debug(err, "网络错误");
  }
);

export { axiosInstance };
