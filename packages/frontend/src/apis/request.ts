import { Api, CustomRequestConfig } from "@butterfly/utils";
import { baseURL } from "../config";
const api = new Api({
  baseURL,
});

export function request<R>(config: CustomRequestConfig) {
  return api.request<R>(config);
}
