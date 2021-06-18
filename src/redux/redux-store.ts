import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
// Если Т - это объект, у которого есть ключи, являющиеся строками и имеющие значение типа U, вовзращаем U, иначе ничено не возвращаем
// infer означает, что тип значение ключа подстраивается под тип U
// грубо говоря, тип значения ключа записывается в переменную U
// получается, в строке ниже тип U подстраивается под ф-цию из объекта
// export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
//  T является объектом, который возвращает ф-цию

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// 2-й агрумент нужен для обработки санков

// @ts-ignore
window.store = store;

export default store;