/**
 * @Author: Mr.Hope
 * @Description: store配置文件
 * @Date: 2019-02-24 22:21:25
 */

import Vue from "vue";
import Vuex from "vuex";
import myMutation from "./mutation";
import myState from "./state";

Vue.use(Vuex); // 使用 Vuex

export default new Vuex.Store({
  state: myState,
  modules: {},
  mutations: myMutation,
});
