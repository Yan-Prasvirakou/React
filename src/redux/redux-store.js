import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
// import navbarReducer from './navbar-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	// navbar: dialogsReducer,
	auth: authReducer,
	app: appReducer
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// ф-ция выше нужна для работы браузерного расширения reduxDevTools, но чета у меня оно по ка не работает
let store = createStore(reducers, composeEnchancers(applyMiddleware(thunkMiddleware)));
// 2-й агрумент нужен для обработки санков

window.store = store;

export default store;