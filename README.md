## 关于

这是一个在线协同文档项目，基于 CRDT 方案来实现协同，使用了社区氛围比较好的 Yjs[https://github.com/yjs/yjs/tree/master]。

项目以 `monorepo + pnpm` 的方式管理，包含了前端和服务端全流程。

## 前端

### 结构

目前主要实现了几个包

```
├─collaborate           // 主要处理协同相关代码，封装y-websocket
├─editor                // 对 slate 编辑器进行扩展
├─frontend              // 文档业务相关代码
├─toolbar               // 为编辑器定制的腾讯文档风格的工具栏
└─util                  // 工具函数
```

其中 `frontend` 的结构

```
├─api                   // 网路请求代码、工具类函数和相关配置
├─application           // 项目核心功能
├─assets                // 字体配置及全局样式
├─baseUI                // 基础 UI 轮子
├─components            // 可复用的 UI 组件
├─routes                // 路由配置文件
└─store                 //redux 相关文件
  App.js                // 根组件
  index.js              // 入口文件
  serviceWorker.js      // PWA 离线应用配置
  style.js              // 默认样式、主题样式等
```

样式采用 `styled-components` 来进行开发，也就是利用 `css in js` 的方式，为什么要这么做，有兴趣的同学可以阅读一下这篇文章 [styled-components 前端组件拆分新思路](https://juejin.cn/post/6844903878580764686)。虽然这个库有一些缺点，但我依然坚持用它进行开发，因为它在工程化方面的优势依然非常明显，而且大部分缺点我们也可以有意识的去避开。

### 开发

进入 frontend 包，执行

```bash
npm run dev
```

## 服务端

服务端我新开了一个[仓库](https://github.com/hzjswlgbsj/butterfly-service)，原因是后端是有很多方案的，我这边使用的是 Nodejs，方便我跑流程，实际上在真实的在线文档项目中，纯 Nodejs 是无法挑起这个重担的，必然是需要 Nodejs 做中间层，存储和计算等还是需要类似于 Java 这种语言。

开启 y-websocket

```bash
npm run server
```

开启接口服务

```bash
npm run start
```

## 最后

这是一个探索性的项目，请不要用于生产环境，在线文档项目要做好不仅仅是跑通一个 Demo 就可以的，本项目是给有相同需求的朋友提供一些资料和 demo 以减少你们调研所花费的时间；其次，大家可以一起交流在线办公领域的解决方案。

这里也有一些资料，可以供你参考: [在线文档](https://www.sixtyden.com/#/README?id=%f0%9f%8c%bf-%e5%9c%a8%e7%ba%bf%e6%96%87%e6%a1%a3)

**如果该项目有帮助到你，请给个 start 鼓励一下！**
