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
			.then(res => res.data)
		// из полученного с сервака ответа возвращаем только data, остальная инфа в данном случае не нужна
	},

	follow(id) {
		return instance.post(`follow/${id}`, null)
			.then(res => res.data)
	},

	unfollow(id) {
		return instance.delete(`follow/${id}`)
			.then(res => res.data)
	}

}

export const headerAPI = {
	getAuthData() {
		return instance.get(`auth/me`)
			.then(res => res.data)
	}
}

export const profileAPI = {
	getUserAccountById(id) {
		return instance.get(`profile/${id}`)
	}
}

