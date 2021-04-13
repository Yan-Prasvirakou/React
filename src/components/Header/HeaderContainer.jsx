import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, getAuthData, logout } from '../../redux/auth-reducer';
import { headerAPI } from '../../api/api';

class HeaderContainer extends React.Component {
	// componentDidMount() {
	// 	this.props.getAuthData();
	// }
	render() {
		return <Header {...this.props}/>
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData, getAuthData, logout })(HeaderContainer);