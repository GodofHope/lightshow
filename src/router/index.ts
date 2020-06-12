/*
 * @Author: Mr.Hope
 * @Description: router 配置文件
 * @Date: 2019-02-26 23:43:23
 */

import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router); // 使用官方 Router

/**
 * @description: 暴露 Router 对象
 * @param {router} router配置
 * @return: router对象
 */
export default new Router({
  // 设置路由配置
  routes,

  // 使用 html5 的 history API
  mode: "history",

  // 设置根目录为环境变量 BASE_URL
  base: process.env.BASE_URL,

  /**
   * 保存滚动位置
   *
   * @param to 新页面 route 对象
   * @param from 旧页面 route 对象
   * @param savedPosition 上次保存的滚动位置
   * @returns 返回网页滚动位置
   */
  scrollBehavior: (_to, _from, savedPosition): { x: number; y: number } =>
    savedPosition || { x: 0, y: 0 },
});
