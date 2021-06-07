import { AppStateType } from './redux-store';
import { getStatus } from './profile-reducer';
import { UserType } from './types/types';
import { usersAPI } from '../api/api';
import { Dispatch } from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

const FOLLOW = 'first-project/users/FOLLOW';
const UNFOLLOW = 'first-project/users/UNFOLLOW';
const SET_USERS = 'first-project/users/SET-USERS';
const SET_CURRENT_PAGE = 'first-project/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'first-project/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'first-project/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'first-project/users/TOGGLE-IS-FOLLOWING-PROGRESS';



let initialState = {
	users: [] as Array<UserType>,
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number>
};

type InitialStateType = typeof initialState

type ActionsTypes = FollowSuccessType | UnfollowSuccessType | SetUsersType |
	SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType | ToggleFollowingProgressType


const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true }
					}
					return user;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false }
					}
					return user;
				})
			};
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		}
		default:
			return state;
	}

}


type FollowSuccessType = { type: typeof FOLLOW, userId: number }
type UnfollowSuccessType = { type: typeof UNFOLLOW, userId: number }
type SetUsersType = { type: typeof SET_USERS, users: Array<UserType> }
type SetCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
type SetTotalUsersCountType = { type: typeof SET_TOTAL_USERS_COUNT, count: number }
type ToggleIsFetchingType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
type ToggleFollowingProgressType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number }


export const followSuccess = (userId: number): FollowSuccessType => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: Array<UserType>): SetUsersType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (count: number): SetTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, count })
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType =>
	({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


export const requestUsers = (page: number, pageSize: number) => {
	return async (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {
		// первый вариант типизиции санков (через аргументы в скобках, что выше)
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));

		let res = await usersAPI.getUsers(page, pageSize)
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(res.data.items));
		dispatch(setTotalUsersCount(res.data.totalCount));
		console.log(res.data);
	}
}

const followUnfollowFlow = async (
	dispatch: Dispatch<ActionsTypes>,
	userId: number, apiMethod: any,
	actionCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType
) => {
	dispatch(toggleFollowingProgress(true, userId));
	let res = await apiMethod(userId);

	if (res.data.resultCode == 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId))
}

// второй вариант типизвции санков
export const follow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
	return async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
		let apiMethod = usersAPI.follow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
	}
}

export const unfollow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
	return async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
		let apiMethod = usersAPI.unfollow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
	}
}


export default usersReducer;