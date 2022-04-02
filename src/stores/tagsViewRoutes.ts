import { defineStore } from "pinia";
import { TagsViewRoutesState, RootStateTypes } from '/@/stores/interface/index';
import { Session } from '/@/utils/storage';
/**
 * @description 后端控制路由
 */

export const tagsViewRoutes = defineStore('', {
  state: (): TagsViewRoutesState => ({
    tagsViewRoutes: [],
		isTagsViewCurrenFull: false,
  }),
  getters: {},
  actions: {
    // 设置 TagsView 路由
		getTagsViewRoutes(data: object[]) {
			this.tagsViewRoutes = data;
		},
		// 设置卡片全屏
		getCurrenFullscreen(bool: boolean) {
			Session.set('isTagsViewCurrenFull', bool);
			this.isTagsViewCurrenFull = bool;
		},

    async setTagsViewRoutes(data: object[]) {
      this.getTagsViewRoutes(data)
		},
		// 设置卡片全屏
		setCurrenFullscreen(bool: boolean) {
      this.getCurrenFullscreen(bool)
		},

  },
})