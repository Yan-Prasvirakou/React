import { instance } from './api';

export enum ResCodesEnum {
	Success = 0,
	Error = 1,
}

export enum ResCodeForCaptcha {
	CapthaIsRequired = 10
}

type AuthResType<RC, D = {}> = {
	data: D
	resultCode: RC
	messages: Array<string>
}


type GetAuthResponseDataType = {
	id: number
	email: string
	login: string
}

type LoginResDataType = {
	userId: number
}


export const authAPI = {
	getAuthData() {
		return instance
			.get<AuthResType<ResCodesEnum, GetAuthResponseDataType>>(`auth/me`)
			.then(res => res.data);
	},
	login(email: string, password: string, captcha: null | string = null) {
		return instance
			.post<AuthResType<ResCodesEnum | ResCodeForCaptcha, LoginResDataType>>(`auth/login`, { email, password, captcha })
			.then(res => res.data)
	},
	logout() {
		return instance
			.delete<AuthResType<ResCodesEnum>>(`auth/login`)
	},
}