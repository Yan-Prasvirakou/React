import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then(res => {
				// debugger
				if (res.data.resultCode === 0) {
					let { id, email, login } = res.data.data;
					this.props.setAuthUserData(id, email, login)
				}
			})
	}
	render() {
		// debugger
		return <Header {...this.props}/>
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

// export default HeaderContainer;
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);