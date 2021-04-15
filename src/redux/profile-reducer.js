import { profileAPI } from '../api/api';

let ADD_POST = 'first-project/profile/ADD-POST';
let SET_USER_PROFILE = 'first-project/profile/SET-USER-PROFILE';
let SET_STATUS = 'first-project/profile/SET-STATUS';

let initialState = {
	profile: null,
	status: '',
	posts: [
		{
			id: 1,
			msg: 'Hello world',
			likes: 4
		},
		{
			id: 2,
			msg: 'My second post My second post My second post My second post My second post My second post My second postMy second post',
			likes: 155
		},
		{
			id: 3,
			msg: '70 лет полет нормальный',
			likes: 32
		},
		{
			id: 4,
			msg: '12345',
			likes: 0
		},
		{
			id: 5,
			msg: 'Empty text text text text text',
			likes: 5
		},
		{
			id: 6,
			msg: 'lorem ipsum',
			likes: 3
		}
	],
};

	
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: 
			let newPost = {
				id: 7,
				msg: action.postText,
				likes: 0
			};

			return {
				...state,
				posts: [...state.posts, newPost],
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status,
			}
		default:
			return state;
	}

}

export const addPostActionCreator = (postText) => ({type: ADD_POST, postText});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserAccountById = (id) => {
	return async (dispatch) => {
		let res = await profileAPI.getUserAccountById(id);
		dispatch(setUserProfile(res.data))
	}
}

export const getStatus = (id) => {
	return async (dispatch) => {
		let res = await profileAPI.getStatus(id);
		dispatch(setStatus(res.data))
	}
}

export const updateStatus = (status) => {
	return async (dispatch) => {
		let res = await profileAPI.updateStatus(status);
			if (res.data.resultCode === 0) {
				dispatch(setStatus(status))
			}
	}
}


export default profileReducer;