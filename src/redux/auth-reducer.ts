import { authAPI, securityAPI } from '../api/api';
import { ResCodesEnum, ResCodeForCaptcha } from '../api/authApi';
import { AppStateType, InferActionsTypes } from './redux-store';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

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

export type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

const authReducer = (state = initialState, action: ActionsTypes): initialStateType => {
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
		case CLEAR_CAPTCHA:
			return {
				...state,
				captchaUrl: action.captchaUrl
			}
		default:
			return state;
	}
}

export const actions = {
	setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
		{ type: SET_USER_DATA, payload: { userId, email, login, isAuth } } as const
	),
	setWrongDataInfo: (wrong: boolean) => (
		{ type: SET_WRONG_DATA_INFO, isWrongDataEntered: wrong } as const
	),
	getCaptchaUrlSuccess: (captchaUrl: string) => (
		{ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } } as const
	),
	clearCaptcha: () => ({ type: CLEAR_CAPTCHA, captchaUrl: null } as const)
}


export const setAuthUserData = (
	userId: number | null, email: string | null, login: string | null, isAuth: boolean
) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth }
})

export const setWrongDataInfo = (wrong: boolean) => ({
	type: SET_WRONG_DATA_INFO,
	isWrongDataEntered: wrong
})

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl }
})

export const clearCaptcha = () => ({
	type: CLEAR_CAPTCHA,
	captchaUrl: null
})


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>

export const getAuthData = (): ThunkType => {
	return async (dispatch: DispatchType) => {
		let meData = await authAPI.getAuthData();
		if (meData.resultCode === ResCodesEnum.Success) {
			let { id, email, login } = meData.data;
			dispatch(actions.setAuthUserData(id, email, login, true))
		}
	}
}

export const login = (email: string, password: string, captcha: string): ThunkType =>
	async (dispatch: DispatchType) => {
		const loginData = await authAPI.login(email, password, captcha);
		if (loginData.resultCode === ResCodesEnum.Success) {
			dispatch(getAuthData())
			dispatch(actions.setWrongDataInfo(false))
		}
		else {
			if (loginData.resultCode === ResCodeForCaptcha.CapthaIsRequired) {
				dispatch(getCaptchaUrl());
			}

			dispatch(actions.setWrongDataInfo(true))
		}
	}

export const getCaptchaUrl = (): ThunkType =>
	async (dispatch: DispatchType) => {
		const data = await securityAPI.getCaptchaUrl();
		const captchaUrl = data.url;
		dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
	}

export const logout = (): ThunkType =>
	async (dispatch: DispatchType) => {
		const res = await authAPI.logout();
		if (res.data.resultCode === ResCodesEnum.Success) {
			dispatch(actions.setAuthUserData(null, null, null, false))
			dispatch(actions.setWrongDataInfo(false))
			dispatch(actions.clearCaptcha())
		}
	}


export default authReducer;