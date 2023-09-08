import { Api } from "../network";

type Constructor<T> = new (...args: any[]) => T;

class Pupa {
  public app!: Pupa; // 当前运行环境的顶层App概念
  public children?: Pupa[];
  private pupaRouter: any; // 路由统一管理
  public components: {
    [propName: string]: any; // react组件实例
  };
  public apis: {
    [propName: string]: typeof Api; // Api 统一管理
  };
  public config: any;
  public name: string = "";
  protected packageInstances: any[] = [];
  protected routes: any[]; // react-router的routes
  protected stores: {
    [storeId: string]: any; // redux 统一管理
  };

  constructor(options: any, config?: any) {
    const { children } = options;

    this.config = config;

    this.children = children;
    this.routes = [];
    this.components = {};
    this.apis = {};
    this.stores = {};
    // this.pupaRouter = new PupaRouter(this);
  }

  public init(): void {
    if (this.children) {
      this.children.forEach((child) => {
        this.initChild(child);
      });
    }
  }

  public initChild(child: Pupa): void {
    child.init();
  }

  public setApp(app: Pupa) {
    this.app = app;
  }
}

export default Pupa;
