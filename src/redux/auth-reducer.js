import { headerAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'first-project/auth/SET-USER-DATA';
const SET_WRONG_DATA_INFO = 'first-project/auth/SET-WRONG-DATA-INFO';
const GET_CAPTCHA_URL_SUCCESS = 'first-project/auth/GET-CAPTCHA-URL-SUCCESS';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isWrongDataEntered: false,
	isAuth: false,
	captchaUrl: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload,
			}
		case SET_WRONG_DATA_INFO:
			return {
				...state,
				isWrongDataEntered: action.isWrongDataEntered,
			}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: {userId, email, login, isAuth}
})

export const setWrongDataInfo = (wrong) => ({
	type: SET_WRONG_DATA_INFO,
	isWrongDataEntered: wrong
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
		type: GET_CAPTCHA_URL_SUCCESS,
		payload: { captchaUrl }
})

export const getAuthData = () => {
	return async (dispatch) => {
		let res = await headerAPI.getAuthData();
		if (res.data.resultCode === 0) {
			let { id, email, login } = res.data.data;
			dispatch(setAuthUserData(id, email, login, true))
		}
	}
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	const res = await headerAPI.login(email, password, rememberMe, captcha);
		if (res.data.resultCode === 0) {
			dispatch(getAuthData())
			dispatch(setWrongDataInfo(false))
		}
		else {
			if (res.data.resultCode === 10) {
				dispatch(getCaptchaUrl());
			}

			dispatch(setWrongDataInfo(true))
		}
}

export const getCaptchaUrl = () => async (dispatch) => {
	const res = await securityAPI.getCaptchaUrl();
	const captchaUrl = res.data.url;
	dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
	const res = await headerAPI.logout();
		if (res.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
			dispatch(setWrongDataInfo(false))
		}
}


export default authReducer;