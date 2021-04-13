import PashaAva from '../components/Users/img/PashaAva.jpg';
import DashaAva from '../components/Users/img/DashaAva.jpg';
import MishaAva from '../components/Users/img/MishaAva.jpg';
import InnaAva from '../components/Users/img/InnaAva.jpg';
import { usersAPI } from '../api/api';

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
	users: [],
	pageSize: 10,
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
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));

		usersAPI.getUsers(page, pageSize).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount / 100));
		})
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.follow(userId)
			.then(data => {
				if (data.resultCode == 0) {
					dispatch(followSuccess(userId))
				}
				dispatch(toggleFollowingProgress(false, userId))
			});
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.unfollow(userId)
			.then(data => {
				if (data.resultCode == 0) {
					dispatch(unfollowSuccess(userId))
				}
				dispatch(toggleFollowingProgress(false, userId))
			});
	}
}


export default usersReducer;