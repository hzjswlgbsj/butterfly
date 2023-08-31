import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
import Vue from 'vue';
import { SentryOptions } from '../Interfaces';
import VueRouter from 'vue-router';

export interface ILogger {
  debug(TAG: string, ...args: any[]): void;
  warn(TAG: string, ...args: any[]): void;
  info(TAG: string, ...args: any[]): void;
  error(TAG: string, ...args: any[]): void;
}

interface Exception {
  tag: string;
  arguments: any[];
}

let inited = false;
export class Logger implements ILogger {
  private _showDebug: boolean = true;
  constructor() {}

  public set showDebug(showDebug: boolean) {
    this._showDebug = showDebug;
  }

  public get showDebug() {
    return this._showDebug
  }

  public debug(TAG: string, ...args: any[]): void {
    if (!this._showDebug) {
      return;
    }
    // tslint:disable-next-line:no-console
    console.log(`[DEBUG]`, TAG, ...args);
  }
  public info(TAG: string, ...args: any[]): void {
    // tslint:disable-next-line:no-console
    console.log(`[INFO]`, TAG, ...args);
  }
  public error(TAG: string, ...args: any[]): void {
    // tslint:disable-next-line:no-console
    console.log(`[ERROR]`, TAG, ...args);
  }
  public warn(TAG: string, ...args: any[]): void {
    // tslint:disable-next-line:no-console
    console.warn(`[WARN]`, TAG, ...args);
  }

  // 添加原因：gui需要特殊显示的log
  // 不能有第一参数， 有第一个参数不好做颜色
  // 需要发布环境不显示
  public log(...args: any[]): void {
    if (!this._showDebug) {
      return;
    }
    // tslint:disable-next-line:no-console
    console.log(...args);
  }

  public initSentry(sentryOptions: SentryOptions, router: VueRouter) {
    if (inited) {
      return;
    }

    const tracingConfig: any = {}
    if (sentryOptions.addRoutingInstrumentation) {
      tracingConfig.routingInstrumentation = Sentry.vueRouterInstrumentation(router)
    }

    inited = true;
    const { url } = sentryOptions
    Sentry.init({
      Vue,
      dsn: url,
      integrations: [new Integrations.BrowserTracing(tracingConfig)],
      tracesSampleRate: 1.0,
    });
  }
}
