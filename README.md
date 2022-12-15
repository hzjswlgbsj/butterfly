## 关于

这是一个在线协同文档项目，基于 CRDT 方案来实现协同，使用了社区比较好的 Yjs[]。

整个项目以 `monorepo + pnpm` 的方式管理，包含了前端和服务端。

## 前端

先看一下前端项目的 `src` 目录结构

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

前端项目的样式采用 `styled-components` 来进行开发，也就是利用 `css in js` 的方式，为什么要这么做，有兴趣的同学可以阅读一下这篇文章 [styled-components 前端组件拆分新思路](https://juejin.cn/post/6844903878580764686)。虽然这个库有一些缺点，但我依然坚持用它进行开发，因为它在工程化方面的优势依然非常明显，而且大部分缺点我们也可以有意识的去避开。

## 服务端
