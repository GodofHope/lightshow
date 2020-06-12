/**
 * @Author: Mr.Hope
 * @Description: Vuex ServiceWorker Module
 * @Date: 2019-03-24 23:50:48
 */
import { Module } from "vuex";
import { BaseState } from "../state";

export interface SWState {
  status: string; // service-worker 状态
  error?: Error;
}

const swState: SWState = { status: "" };

const swModule: Module<SWState, BaseState> = {
  state: swState,
  mutations: {
    /**
     * @description: 设置 ServiceWorker 状态
     *
     * @param state swState
     * @param status ServiceWorker 状态
     */
    setList(state: SWState, status: string): void {
      state.status = status;
    },

    /**
     * @description: 设置 ServiceWorker 错误
     *
     * @param state imagestate
     * @param error 遇到的错误
     */
    index(state: SWState, error: Error): void {
      state.status = "error";
      state.error = error;
    },
  },
};

export default swModule;
