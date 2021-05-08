import React, {useState, useEffect} from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Preloader from '../common/Preloader';
import ProfileInfo from './ProfileInfo';
import MishaAva from '../Users/img/MishaAva.jpg';



const Profile = (props) => {
	// debugger
	if (!props.profile) return <Preloader />


	return (
		<div className={classes.profile__content}>
			<ProfileInfo
				profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto}
				status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}
			/>
			<MyPostsContainer store={props.store}/>
		</div>
	)
}

export default Profile;