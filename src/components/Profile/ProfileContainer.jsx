import React, {PureComponent} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserAccountById, getStatus, updateStatus} from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends PureComponent {
	
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) this.props.history.push('/login')
		}
		this.props.getUserAccountById(userId)
		this.props.getStatus(userId);
	}


	render() {
		// console.log('RENDER', this.props);
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
			/>
		)
	}
	
}

let mapStatetoProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
})

export default compose(
	connect(mapStatetoProps, { getUserAccountById, getStatus, updateStatus }),
	withRouter,
	// withAuthRedirect
)(ProfileContainer)




