import { AppStateType, InferActionsTypes } from './redux-store';
import { getStatus } from './profile-reducer';
import { UserType } from './types/types';
import { usersAPI, ResultCodesEnum } from '../api/api';
import { FollowUnfollowResType } from '../api/usersApi';
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

type ActionsTypes = InferActionsTypes<typeof actions>


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

export const actions = {
	followSuccess: (userId: number) => ({ type: FOLLOW, userId } as const),
	unfollowSuccess: (userId: number) => ({ type: UNFOLLOW, userId } as const),
	setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users } as const),
	setCurrentPage: (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const),
	setTotalUsersCount: (count: number) => ({ type: SET_TOTAL_USERS_COUNT, count } as const),
	toggleIsFetching: (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
	toggleFollowingProgress: (isFetching: boolean, userId: number) => (
		{ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const
	)
}

export const requestUsers = (page: number, pageSize: number) => {
	return async (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {
		// первый вариант типизиции санков (через аргументы в скобках, что выше)
		dispatch(actions.toggleIsFetching(true));
		dispatch(actions.setCurrentPage(page));

		let data = await usersAPI.getUsers(page, pageSize)
		dispatch(actions.toggleIsFetching(false));
		dispatch(actions.setUsers(data.items));
		dispatch(actions.setTotalUsersCount(data.totalCount));
		console.log(data);
	}
}

const followUnfollowFlow = async (
	dispatch: Dispatch<ActionsTypes>,
	userId: number, apiMethod: (userIid: number) => Promise<FollowUnfollowResType>,
	actionCreator: (userId: number) => ActionsTypes
) => {
	dispatch(actions.toggleFollowingProgress(true, userId));
	let data = await apiMethod(userId);

	if (data.resultCode === ResultCodesEnum.Success) {
		dispatch(actionCreator(userId))
	}
	dispatch(actions.toggleFollowingProgress(false, userId))
}

// второй вариант типизвции санков
export const follow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
	return async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
		let apiMethod = usersAPI.follow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, actions.followSuccess);
	}
}

export const unfollow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
	return async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
		let apiMethod = usersAPI.unfollow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, actions.unfollowSuccess);
	}
}


export default usersReducer;