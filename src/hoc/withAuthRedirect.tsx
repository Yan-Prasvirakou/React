import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/redux-store';

let mapStatetoPropsForRedirect = (state: AppStateType) => ({
	isAuth: state.auth.isAuth
})

type MapStateType = {
	isAuth: boolean
}

type DispatchPropsType = {

}

export function withAuthRedirect<PropsType>(Component: React.ComponentType<PropsType>) {
	const RedirectComponent: React.FC<DispatchPropsType & MapStateType> = (props) => {
		
		// render() {
			let { isAuth, ...restProps } = props
			if (!isAuth) return <Redirect to='/login' />
		return <Component {...restProps as  PropsType}/>
		// }
	}

	let connectAuthRedirectComponent = connect<MapStateType, DispatchPropsType, PropsType, AppStateType>(
		mapStatetoPropsForRedirect, {})
		(RedirectComponent)
	return connectAuthRedirectComponent;
}