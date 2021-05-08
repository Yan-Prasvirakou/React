import React, {PureComponent} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	setUserProfile, getUserAccountById, getStatus, updateStatus, savePhoto, saveProfile
} from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends PureComponent {

	renderProfile() {
			let userId = this.props.match.params.userId;
			if (!userId) {
				userId = this.props.authorizedUserId;
				if (!userId) this.props.history.push('/login')
			}
			this.props.getUserAccountById(userId)
			this.props.getStatus(userId);
	}
	
	componentDidMount() {
		this.renderProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			// console.log(this.props.match.params)
			this.renderProfile();
		}
	}


	render() {
		// console.log('RENDER', this.props);
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				isOwner={!this.props.match.params.userId}
				savePhoto={this.props.savePhoto}
				saveProfile={this.props.saveProfile}
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
	connect(mapStatetoProps, { getUserAccountById, getStatus, updateStatus, savePhoto, saveProfile }),
	withRouter,
	// withAuthRedirect
)(ProfileContainer)




