import request from '/@/utils/request';

/**
 * 登录api接口集合
 * @method signIn 用户登录
 * @method signOut 用户退出登录
 */
export function useLoginApi() {
	return {
		signIn: (params: object) => {
			return request({
				url: '/user/signIn',
				method: 'post',
				data: params,
			});
		},
		signOut: (params: object) => {
			return request({
				url: '/user/signOut',
				method: 'post',
				data: params,
			});
		},
	};
}


export const login = (data: object) => {
	return request({
		url: '/login',
		method: 'POST',
		data
	})
}


export const getUserInfo = (params: object) => {
	return request({
		url: '/getUserInfo',
		method: 'GET',
		params
	})
}