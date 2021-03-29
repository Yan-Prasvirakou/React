import { profileAPI } from '../api/api';

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET-USER-PROFILE';
let SET_STATUS = 'SET-STATUS';

let initialState = {
	newPostText: 'new text for post',
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
				msg: state.newPostText,
				likes: 0
			};

			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
		case UPDATE_NEW_POST_TEXT: 
			return {
				...state,
				newPostText: action.newText,
			}
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

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserAccountById = (id) => {
	return (dispatch) => {
		profileAPI.getUserAccountById(id)
			.then(res => {
			dispatch(setUserProfile(res.data))
		})
	}
}

export const getStatus = (id) => {
	return (dispatch) => {
		profileAPI.getStatus(id)
			.then(res => {
				dispatch(setStatus(res.data))
			})
	}
}

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(res => {
				if (res.data.resultCode === 0) {
					dispatch(setStatus(status))
				}
			})
	}
}


export default profileReducer;