import { getAuthData } from "./auth-reducer";
// import { AppStateType } from './redux-store';
// import { Dispatch } from 'redux';

const INITIALIZED_SUCCESS = 'first-project/app/INITIALIZED-SUCCESS';

export type InitialStateType = {
	initialized: boolean
}

let initialState: InitialStateType = {
	initialized: false
}

type ActionsTypes = InitializedSuccessActionType

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true				
			}
		default:
			return state;
	}
}

type InitializedSuccessActionType = { type: typeof INITIALIZED_SUCCESS };

export const initializedSuccess = (): InitializedSuccessActionType =>
	({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthData());

	promise.then(() => {
		dispatch(initializedSuccess());
	})
	
}

export default appReducer;