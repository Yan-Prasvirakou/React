import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
// import navbarReducer from './navbar-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	// navbar: dialogsReducer,
	auth: authReducer,
	app: appReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// 2-й агрумент нужен для обработки санков

// @ts-ignore
window.store = store;

export default store;