import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '5a7f3e81-c5b3-4c7c-8240-5a3fa44e0f4b'
	}
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`) // baseUrl цепляется в начало строки
		// из полученного с сервака ответа возвращаем только data, остальная инфа в данном случае не нужна
	},

	follow(id) {
		return instance.post(`follow/${id}`, null)
	},

	unfollow(id) {
		return instance.delete(`follow/${id}`)
	}

}

export const headerAPI = {
	getAuthData() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, {email, password, rememberMe})
	},
	logout() {
		return instance.delete(`auth/login`)
	},
}

export const profileAPI = {
	getUserAccountById(id) {
		return instance.get(`profile/${id}`)
	},

	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},

	updateStatus(status) {
		return instance.put(`profile/status`, {status: status})
	},

}

