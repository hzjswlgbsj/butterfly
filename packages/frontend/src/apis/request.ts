import { Api, CustomRequestConfig } from "@butterfly/pupa";
import { baseURL } from "../config";
const api = new Api({
  baseURL,
});

export function request<R>(config: CustomRequestConfig) {
  return api.request<R>(config);
}
