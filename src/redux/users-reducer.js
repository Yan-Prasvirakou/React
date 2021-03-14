import PashaAva from '../components/Users/img/PashaAva.jpg';
import DashaAva from '../components/Users/img/DashaAva.jpg';
import MishaAva from '../components/Users/img/MishaAva.jpg';
import InnaAva from '../components/Users/img/InnaAva.jpg';

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';

let initialState = {
	users: [
		{ 
			id: 1, 
			followed: false, 
			fullName: 'Pasha', 
			status: 'i like react', 
			location: { 
				city: 'Minsk', country: 'Belarus' 
			},
			ava: PashaAva,
		},
		{ 
			id: 2, 
			followed: true,
			fullName: 'Dasha',
			status: 'i\'m from Rovno',
			location: {
				city: 'Rovno', country: 'Ukraine'
			},
			ava: DashaAva,
		},
		{ 
			id: 3, 
			followed: false, 
			fullName: 'Misha', 
			status: 'Hi everyone',
			location: {
				city: 'Vitebsk', country: 'Belarus'
			},
			ava: MishaAva,
		},
		{ 
			id: 4, 
			followed: true,
			fullName: 'Inna',
			status: 'Lego forever',
			location: {
				city: 'Odessa', country: 'Ukraine'
			},
			ava: InnaAva,
		},

	]
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
			return {...state, users: [...state.users, ...action.users]}
		}
		default:
			return state;
	}

}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;