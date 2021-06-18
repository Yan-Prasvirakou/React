import { getAuthData } from "./auth-reducer";
import { AppStateType } from './redux-store';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';

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

export const initializeApp = () =>
	(dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>) => {
	let promise = dispatch(getAuthData());

	promise.then(() => {
		dispatch(initializedSuccess());
	})
	
}

export default appReducer;