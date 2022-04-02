import { defineStore } from "pinia";
import { KeepAliveNamesState, RootStateTypes } from '/@/stores/interface/index';

/**
 * @description 路由缓存
 */

export const keepAliveNames = defineStore('keepAliveNames', {
  state: (): KeepAliveNamesState => ({
    keepAliveNames: [],
  }),
  getters: {},
  actions: {
    // 设置路由缓存（name字段）
    getCacheKeepAlive(data: Array<string>) {
			this.keepAliveNames = data;
		},

    async setCacheKeepAlive(data: Array<string>) {
			this.getCacheKeepAlive(data)
		},
  }
  
})