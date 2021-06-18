import { instance } from './api';
import { UserType } from './../redux/types/types';

// зарефиаткорить через джененики

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
}

type GetUsersResponseType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}

export type FollowUnfollowResType = {
	resultCode: ResultCodesEnum
	messages: Array<string>
	data: {}
}

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(res => res.data)
	},

	follow(id: number) {
		return instance.post<FollowUnfollowResType>(`follow/${id}`, null)
			.then(res => res.data)
	},

	unfollow(id: number) {
		return instance.delete<FollowUnfollowResType>(`follow/${id}`)
			.then(res => res.data)
	}
}