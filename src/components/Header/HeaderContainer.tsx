import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, getAuthData, logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
	isAuth: boolean
	login: string | null
}

type MapDispatchToPropsType = {
	logout: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & AppStateType

class HeaderContainer extends React.Component<PropsType> {
	
	render() {
		return <Header {...this.props} logout={this.props.logout}/>
	}
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
	
});

export default connect(
	mapStateToProps, { setAuthUserData, getAuthData, logout }
)(HeaderContainer);