import { AxiosRequestConfig } from "axios";

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
