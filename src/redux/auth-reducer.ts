import { TypeOf } from 'yup';
import { headerAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'first-project/auth/SET-USER-DATA';
const SET_WRONG_DATA_INFO = 'first-project/auth/SET-WRONG-DATA-INFO';
const GET_CAPTCHA_URL_SUCCESS = 'first-project/auth/GET-CAPTCHA-URL-SUCCESS';
const CLEAR_CAPTCHA = 'first-project/auth/CLEAR-CAPTCHA';


let initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isWrongDataEntered: false,
	isAuth: false,
	captchaUrl: null as string | null
}

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				
				...state,
				...action.payload,
				// userId: 'hgt',
			}
		case SET_WRONG_DATA_INFO:
			return {
				...state,
				isWrongDataEntered: action.isWrongDataEntered,
			}
		case CLEAR_CAPTCHA:
			return {
				...state,
				captchaUrl: action.captchaUrl
			}
		default:
			return state;
	}
}

type SetAuthUserDataActionPayloadType = {
	userId: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}
type SetAuthUserDataActionType = {
	type: typeof SET_USER_DATA
	payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (
	userId: number | null, email: string | null, login: string | null, isAuth: boolean
): SetAuthUserDataActionType =>
({
	type: SET_USER_DATA,
	payload: {userId, email, login, isAuth}
})


type setWrongDataInfoActionType = {
	type: typeof SET_WRONG_DATA_INFO
	isWrongDataEntered: boolean
}
export const setWrongDataInfo = (wrong: boolean): setWrongDataInfoActionType => ({
	type: SET_WRONG_DATA_INFO,
	isWrongDataEntered: wrong
})

type getCaptchaUrlSuccessActionType = {
	type: typeof GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
		type: GET_CAPTCHA_URL_SUCCESS,
		payload: { captchaUrl }
})

type clearCaptchaActionType = {
	type: typeof CLEAR_CAPTCHA
	captchaUrl: null
}
export const clearCaptcha = (): clearCaptchaActionType => ({
	type: CLEAR_CAPTCHA,
	captchaUrl: null
})

export const getAuthData = () => {
	return async (dispatch: any) => {
		let res = await headerAPI.getAuthData();
		if (res.data.resultCode === 0) {
			let { id, email, login } = res.data.data;
			dispatch(setAuthUserData(id, email, login, true))
		}
	}
}


export const login = (email: string, password: string, captcha: string) =>
	async (dispatch: any) => {
		const res = await headerAPI.login(email, password, captcha);
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

export const getCaptchaUrl = () => async (dispatch: any) => {
	const res = await securityAPI.getCaptchaUrl();
	const captchaUrl = res.data.url;
	dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
	const res = await headerAPI.logout();
		if (res.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
			dispatch(setWrongDataInfo(false))
			dispatch(clearCaptcha())
		}
}


export default authReducer;