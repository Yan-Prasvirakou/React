import { headerAPI } from '../api/api';
// import { Formik.setSubmitting } from 'formik';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_WRONG_DATA_INFO = 'SET-WRONG-DATA-INFO'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isWrongDataEntered: false,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
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

export const getAuthData = () => {
	return (dispatch) => {
		headerAPI.getAuthData()
			.then(data => {
				if (data.resultCode === 0) {
					let {	id,	email,	login	} = data.data;
					dispatch(setAuthUserData(id, email, login, true))
				}
			})
	}
}

export const login = (email, password, rememberMe) => (dispatch) => {
	headerAPI.login(email, password, rememberMe)
		.then(res => {
			if (res.data.resultCode === 0) {
				dispatch(getAuthData())
				dispatch(setWrongDataInfo(false))
			}
			else {
				dispatch(setWrongDataInfo(true))
			}
		})
}

export const logout = () => (dispatch) => {
	headerAPI.logout()
		.then(res => {
			if (res.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false))
				dispatch(setWrongDataInfo(false))
			}
		})
}


export default authReducer;