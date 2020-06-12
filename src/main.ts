/*
 * @Author: Mr.Hope
 * @Date: 2019-06-13 21:32:08
 * @Description: 主脚本文件
 */

import Vue, { VNode } from "vue";
import App from "./App.vue";

// 引入配置好的 vue-router 与 vuex
import router from "./router";
import store from "./store";

// 引入 service worker
import registerSW from "./service-worker/registerSW";

// 注册 service worker
registerSW(store);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h): VNode => h(App),
}).$mount("#app");
