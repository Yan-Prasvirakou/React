import React, {PureComponent} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
	setUserProfile, getUserAccountById, getStatus, updateStatus, savePhoto, saveProfile
} from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { ProfileType } from '../../redux/types/types';
import { AppStateType } from '../../redux/redux-store';


type MapStateToPropsType = {
	profile: ProfileType | null
	status: string
	authorizedUserId: number | null
	isAuth: boolean
	// history: any
	// match: any
	// store: any
}

type LocalPropsType = {
	history: any
	match: any
	store: any
}

type MapDispatchToPropsType = {
	getUserAccountById: (id: number) => void
	getStatus: (id: number) => void
	updateStatus: (status: string) => void
	savePhoto: (file: any) => void
	saveProfile: (profile: ProfileType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & LocalPropsType & AppStateType

class ProfileContainer extends PureComponent<PropsType> {

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

	componentDidUpdate(prevProps: PropsType) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			// console.log(this.props.match.params)
			this.renderProfile();
		}
	}


	render() {
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

let mapStatetoProps = (state: AppStateType): MapStateToPropsType => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
})

export default compose(
	connect<MapStateToPropsType, MapDispatchToPropsType, LocalPropsType, AppStateType>(mapStatetoProps, {
		getUserAccountById, getStatus, updateStatus, savePhoto, saveProfile
	}),
	withRouter,
	// withAuthRedirect
)(ProfileContainer)




