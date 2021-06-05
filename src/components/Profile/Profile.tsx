import React, {useState, useEffect} from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader';
import ProfileInfo from './ProfileInfo';
import { ProfileType } from '../../redux/types/types';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
	// {...this.props }
	profile: ProfileType | null
	status: string
	updateStatus: (status: string) => void
	isOwner: boolean
	savePhoto: (file: any) => void
	saveProfile: (profile: ProfileType) => void
	// store: AppStateType
	// store: any
}

const Profile: React.FC<PropsType> = (props) => {
	// debugger
	if (!props.profile) return <Preloader />


	return (
		<div className={classes.profile__content}>
			<ProfileInfo
				profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto}
				status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}
			/>
			{/* {props.isOwner && <MyPostsContainer store={props.store} />} */}
			{/* ругается из-за store ы пропсах в строке выше, поэтому пока попробую без store */}
			{props.isOwner && <MyPostsContainer/>}
		</div>
	)
}

export default Profile;