import { defineStore } from "pinia";
import { Session } from '/@/utils/storage';
import { UserInfosState, RootStateTypes } from '/@/stores/interface/index';

/**
 * @description 
 */

export const userInfosModule = defineStore('userInfos',{
  state: (): UserInfosState => ({
    userInfos: {
			authBtnList: [],
			photo: '',
			roles: [],
			time: 0,
			userName: '',
		},
  }),
  getters: {

  },
  actions: {
    // 设置用户信息
    async setUserInfos( data: UserInfosState ) {
			if (data) {
        this.getUserInfos(data)
			} else {
				if (Session.get('userInfo')) this.getUserInfos(Session.get('userInfo'))
			}
		},
    getUserInfos(data: any) {
			this.userInfos = data;
		},
  },

})