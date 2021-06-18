import { instance } from './api';
import { PhotosType, ProfileType } from './../redux/types/types';

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
}

type ProfileResType<D = {}> = {
	resultCode: ResultCodesEnum
	messages: Array<string>
	data: D
}

export const profileAPI = {
	getUserAccountById(id: number) {
		return instance.get<ProfileType>(`profile/${id}`).then(res => res.data)
	},

	getStatus(userId: number) {
		return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
	},

	updateStatus(status: string) {
		return instance.put<ProfileResType>(`profile/status`, { status: status })
			.then(res => res.data)
	},

	savePhoto(photoFile: File) {
		const formData = new FormData();
		formData.append('image', photoFile);

		return instance.put<ProfileResType<{photos : PhotosType}>>('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(res => res.data)
	},

	saveProfile(profile: ProfileType) {
		return instance.put<ProfileResType>('profile', profile)
			.then(res => res.data)
	}

}