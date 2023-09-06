import { ILogger } from "../types";

export class Logger implements ILogger {
  private _showDebug: boolean = true;
  constructor() {}

  public set showDebug(showDebug: boolean) {
    this._showDebug = showDebug;
  }

  public get showDebug() {
    return this._showDebug;
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
}

const Log = new Logger();
Log.showDebug = true;

export default Log;
