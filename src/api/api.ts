import axios from 'axios';
import { profileAPI as importedProfileAPI } from './profileApi'
import { authAPI as importedAuthAPI } from './authApi'
import { usersAPI as importedUsersAPI } from './usersApi'


export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/', // baseUrl цепляется в начало строки со ссылкой
	headers: {
		'API-KEY': '5a7f3e81-c5b3-4c7c-8240-5a3fa44e0f4b'
	}
})

export const usersAPI = importedUsersAPI
export const authAPI = importedAuthAPI
export const profileAPI = importedProfileAPI



export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
}

export enum ResultCodeForCaptcha {
	CapthaIsRequired = 10
}

type SecurityAPIResponseType = {
	url: string
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get<SecurityAPIResponseType>(`security/get-captcha-url`)
			.then(res => res.data)
	},
}
