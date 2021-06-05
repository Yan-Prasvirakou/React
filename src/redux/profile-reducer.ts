import { PostType } from './types/types';
import { PhotosType } from './types/types';
import { ProfileType } from './types/types';

import { profileAPI } from '../api/api';

let ADD_POST = 'first-project/profile/ADD-POST';
let SET_USER_PROFILE = 'first-project/profile/SET-USER-PROFILE';
let SET_STATUS = 'first-project/profile/SET-STATUS';
let SAVE_PHOTO_SUCCESS = 'first-project/profile/SAVE-PHOTO-SUCCESS';
let CHANGE_LIKE = 'CHANGE-LIKE';


let initialState = {
	profile: null as ProfileType | null,
	status: '',
	posts: [
		{
			id: 6,
			msg: 'Hello world',
			likes: 4,
			likedByMe: false
		},
		{
			id: 5,
			msg: 'My second post My second post My second post My second post My second post My second post My second postMy second post',
			likes: 155,
			likedByMe: false
		},
		{
			id: 4,
			msg: '70 лет полет нормальный',
			likes: 32,
			likedByMe: false
		},
		{
			id: 3,
			msg: '12345',
			likes: 0,
			likedByMe: false
		},
		{
			id: 2,
			msg: 'Empty text text text text text',
			likes: 5,
			likedByMe: false
		},
		{
			id: 1,
			msg: 'lorem ipsum',
			likes: 3,
			likedByMe: false
		}
	] as Array<PostType>,
};

export type InitialStateType = typeof initialState

	
const profileReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case ADD_POST:
			let newPostId = state.posts.length + 1;
			let newPost = {
				id: newPostId,
				msg: action.postText,
				likes: 0,
				likedByMe: false
			};

			return {
				...state,
				posts: [newPost, ...state.posts],
			};
		case CHANGE_LIKE:
			let likedPostId = action.likedPostId;
			let likedPost = state.posts.filter(post => post.id == likedPostId)[0];
			let likes = likedPost.likes;

			let posts = !likedPost.likedByMe
				? state.posts.map(post => post.id == likedPostId ? { ...post, likedByMe: true, likes: ++likes } : { ...post })
				:	state.posts.map(post => post.id == likedPostId ? { ...post, likedByMe: false, likes: --likes } : { ...post })

			return {
				...state,
				posts: [ ...posts ] ,
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
		case SAVE_PHOTO_SUCCESS: 
			return {
				...state,
				profile: {...state.profile, photos: action.photos} as ProfileType
			}
		default:
			return state;
	}

}


type AddPostActionCreatorType = {
	type: typeof ADD_POST
	postText: string
}
type AddLikeACType = {
	type: typeof CHANGE_LIKE
	likedPostId: number
}
type SetUserProfileType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}
type SetStatusType = {
	type: typeof SET_STATUS
	status: string
}
type SavePhotoSuccessType = {
	type: typeof SAVE_PHOTO_SUCCESS
	// postText: string
	photos: PhotosType
}

export const addPostActionCreator = (postText: string): AddPostActionCreatorType =>
	({ type: ADD_POST, postText });
export const addLikeAC = (likedPostId: number): AddLikeACType => ({ type: CHANGE_LIKE, likedPostId });
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})



export const getUserAccountById = (id: number) => {
	return async (dispatch: any) => {
		let res = await profileAPI.getUserAccountById(id);
		// console.log(res.data)
		dispatch(setUserProfile(res.data))
	}
}

export const getStatus = (id: number) => {
	return async (dispatch: any) => {
		let res = await profileAPI.getStatus(id);
		dispatch(setStatus(res.data))
	}
}

export const updateStatus = (status: string) => {
	return async (dispatch: any) => {
		let res = await profileAPI.updateStatus(status);
			if (res.data.resultCode === 0) {
				dispatch(setStatus(status))
			}
	}
}

export const savePhoto = (file: any) => {
	return async (dispatch: any) => {
		let res = await profileAPI.savePhoto(file);
			if (res.data.resultCode === 0) {
				dispatch(savePhotoSuccess(res.data.data.photos))
			}
	}
}

export const saveProfile = (profile: ProfileType) => {
	return async (dispatch: any, getState: any) => {
		const userId = getState().auth.userId;
		const res = await profileAPI.saveProfile(profile);
		if (res.data.resultCode === 0) {
			dispatch(getUserAccountById(userId))
		} else {
			console.log('something wrong')
		}
	}
}


export default profileReducer;