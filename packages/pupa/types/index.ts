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

export interface ILogger {
  debug(TAG: string, ...args: any[]): void;
  warn(TAG: string, ...args: any[]): void;
  info(TAG: string, ...args: any[]): void;
  error(TAG: string, ...args: any[]): void;
}
