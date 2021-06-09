import { ProfileType, UserType } from './../redux/types/types';
import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '5a7f3e81-c5b3-4c7c-8240-5a3fa44e0f4b'
	}
})

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
}

type GetUsersResponseType = {
	items: Array<UserType>
	totalCount: number
	error: null
}

type FollowUnfollowResponseType = {
	resultCode: ResultCodesEnum
	messages: Array<string>
	data: { }
}

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`) // baseUrl цепляется в начало строки
			.then(res => res.data)
	},

	follow(id: number) {
		return instance.post<FollowUnfollowResponseType>(`follow/${id}`, null)
			.then(res => res.data)
	},

	unfollow(id: number) {
		return instance.delete<FollowUnfollowResponseType>(`follow/${id}`)
			.then(res => res.data)
	}
}

export enum ResultCodeForCaptcha {
	CapthaIsRequired = 10
}

type GetAuthDataResponseType = {
	data: {
		id: number
		email: string
		login: string
	}
	resultCode: ResultCodesEnum
	messages: Array<string>
}

type LoginResponseType = {
	data: {
		userId: number
	}
	resultCode: ResultCodesEnum | ResultCodeForCaptcha
	messages: Array<string>
}


type LogoutResponseType = {
	data: {}
	resultCode: ResultCodesEnum
	messages: Array<string>
}

export const headerAPI = {
	getAuthData() {
		return instance.get<GetAuthDataResponseType>(`auth/me`).then(res => res.data);
	},
	login(email: string, password: string, captcha: null | string = null) {
		return instance.post<LoginResponseType>(`auth/login`, { email, password, captcha })
			.then(res => res.data)
	},
	logout() {
		return instance.delete<LogoutResponseType>(`auth/login`)
	},
}


// type GetUserAccountByIdType = ProfileType
type UpdateStatusResponseType = FollowUnfollowResponseType
type SaveProfileResponseType = FollowUnfollowResponseType

export const profileAPI = {
	getUserAccountById(id: number) {
		return instance.get<ProfileType>(`profile/${id}`).then(res => res.data)
	},

	getStatus(userId: number) {
		return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
	},

	updateStatus(status: string) {
		return instance.put<UpdateStatusResponseType>(`profile/status`, { status: status })
			.then(res => res.data)
	},

	savePhoto(photoFile: any) {
		const formData = new FormData();
		formData.append('image', photoFile);

		return instance.put<any>('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(res => res.data)
	},

	saveProfile(profile: ProfileType) {
		return instance.put<SaveProfileResponseType>('profile', profile)
			.then(res => res.data)
	}

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
