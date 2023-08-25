import { AxiosRequestConfig } from "axios";
export interface CursorData {
  name: string;
  color: string;
}
export interface CustomRequestConfig extends AxiosRequestConfig {
  traceCustom?: {
    [key: string]: string;
  };
}

export interface HttpHeaders {
  Authorization?: string;
  SubOrgKey?: string;
  TargetSubOrgKey?: string;
}
