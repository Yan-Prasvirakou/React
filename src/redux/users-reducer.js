import { usersAPI } from '../api/api';

let FOLLOW = 'first-project/users/FOLLOW';
let UNFOLLOW = 'first-project/users/UNFOLLOW';
let SET_USERS = 'first-project/users/SET-USERS';
let SET_CURRENT_PAGE = 'first-project/users/SET-CURRENT-PAGE';
let SET_TOTAL_USERS_COUNT = 'first-project/users/SET-TOTAL-USERS-COUNT';
let TOGGLE_IS_FETCHING = 'first-project/users/TOGGLE-IS-FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'first-project/users/TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
	users: [],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
};


const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: true}
					}
					return user;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: false}
					}
					return user;
				})
			};
		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
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


export const followSuccess= (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const requestUsers = (page, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));

		let res = await usersAPI.getUsers(page, pageSize)
		dispatch(toggleIsFetching(false));
		// dispatch(setCurrentPage(page));
		dispatch(setUsers(res.data.items));
		dispatch(setTotalUsersCount(res.data.totalCount));
	}
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	let res = await apiMethod(userId);

	if (res.data.resultCode == 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
	return async (dispatch) => {
		let apiMethod = usersAPI.follow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
	}
}

export const unfollow = (userId) => {
	return async (dispatch) => {
		let apiMethod = usersAPI.unfollow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
	}
}


export default usersReducer;