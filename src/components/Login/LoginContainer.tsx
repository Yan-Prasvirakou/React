import React from 'react';
import Login from './Login'
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';


type MapStateToPropsType = {
	captchaUrl: string | null
	isAuth: boolean
	isWrongDataEntered: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth,
	isWrongDataEntered: state.auth.isWrongDataEntered
})

export default connect(mapStateToProps, { login })(Login)
