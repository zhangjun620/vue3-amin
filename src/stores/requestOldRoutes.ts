import { defineStore } from "pinia";
import { RequestOldRoutesState, RootStateTypes } from '/@/stores/interface/index';

/**
 * @description 后端控制路由
 */

export const requestOldRoutes = defineStore('requestOldRoutes',{
  state: (): RequestOldRoutesState => ({
    requestOldRoutes: []
  }),
  actions: {
    // 后端控制路由
    getBackEndControlRoutes(data: Array<String>) {
			this.requestOldRoutes = data;
		},
    
		setBackEndControlRoutes( routes: Array<string>) {
			this.getBackEndControlRoutes(routes)
		},
  },
})