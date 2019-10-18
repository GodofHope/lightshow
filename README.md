# 东北师大灯光秀网站

[![作者：Mr.Hope](https://img.shields.io/badge/作者-Mr.Hope-blue.svg)](https://mrhope.nenuyouth.com)
[![Travis CI](https://travis-ci.com/nenuyouth/lightshow.svg?branch=master)](https://travis-ci.com/nenuyouth/lightshow)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a77608aa-e91b-4617-b434-8c7ac51d83b2/deploy-status)](https://app.netlify.com/sites/lightshow/deploys)
> 本项目采用GPL V3.0开源协议

东北师范大学灯光秀网站。→ [点击前往](https://light.nenuyouth.com) | [备用地址](https://lightshow.netlify.com/)

该项目使用 Node.js，基于 Vue 框架制作。

## 别名设置

- @：`src/`
- \#：`src/components`
- |：`src/assets`
- %：`src/utils`

## Linter配置

项目已有自己的一套项目风格预设。

启动项目之后，请严格按照Linter提示格式化代码。项目不应包含任何无法通过Linter配置检查的代码。

## Node.js库使用

### 项目使用库

#### Vue官方库

> 跟进使用最新版官方库

- @vue/cli
- vue
- vue-router
- vue-class-component
- vue-property-decorator
- vuex

#### 第三方库

- axios(基于promise的html访问功能)
  > 在本demo中未使用
- register-service-worker
- vue-wechat-title(设置网页标题)
  > 在本demo中未使用

#### CDN引入

- Vue
- Vuex
- Vue-Router
- Viewerjs
- Tinycolor2
- Axios
  > 在本demo中未使用
- jQuery
  > 在本demo中未使用

### 开发依赖

#### Vue-cli相关

- @vue/cli-plugin-babel
- @vue/cli-plugin-pwa
- @vue/cli-service

#### 代码打包相关

- babel-plugin-import
- fibers

#### 开发语言相关

- vue-template-compiler(vue单文件编译器)
- sass
- sass-loader
- typescript

#### 代码检查与格式化工具

- eslint
- eslint-plugin-vue
- babel-eslint
- @vue/cli-plugin-eslint
- @vue/eslint-config-airbnb
- @vue/eslint-config-typescript
- @vue/cli-plugin-typescript

## 初始化项目

```bash
npm install
```

## 更新项目依赖

```bash
npm update
```

或

```bash
npm install
```

### 启动开发环境

```bash
npm run serve
```

> 运行开发环境，可在浏览器通过[http://localhost:8080](http://localhost:8080)直接访问。
> 使用`ctrl + c`组合键并输入`y`再回车来终止开发环境

### 构建生产环境

- 构建现代输出（ES5标准支持，有fallback）

```bash
npm run build
```

- 构建常规输出（ES5标准支持，有fallback）

```bash
npm run normBuild
```

> 执行构建，将构建成功的网页输出至/dist目录

```bash
npm run rebuild
```

```bash
npm run normRebuild
```

> 重新构建（现代 | 常规），不清空输出目录原内容

### 部署网站

```bash
start deploy.bat
```

> 执行构建，将构建成功的网站推送到Github Pages与Gitee Pages

#### 执行文件提示和文件修复

```bash
npm run lint
```

#### 分析打包文件

- 分析现代构建打包

```bash
npm run analyze
```

- 分析普通构建打包

```bash
npm run normAnal
```

#### 查看浏览器支持

```bash
npm run browser
```

#### 输出Webpack模式打包配置

- 输出现代构建打包配置至当前目录的moderm.js

```bash
npm run inspect
```

- 输出普通构建打包配置至当前目录的normal.js

```bash
npm run normInspect
```

#### 执行测试

端对端测试

```bash
npm run e2e
```

单元测试

```bash
npm run unit
```

### 自定义配置

查看 [自定义配置](https://cli.vuejs.org/zh/config/).
