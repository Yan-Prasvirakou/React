import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader'



const Profile = (props) => {
	if (!props.profile) return <Preloader/>
	return (
		<div className={classes.profile__content}>
			<img className={classes.content__img} src='https://www.aeroflot.ru/media/aflfiles/by/msq/msq_2.jpg'/>
			<img src={props.profile.photos.large}/>
			<div>about user: {props.profile.aboutMe}</div>
			<div>full name: {props.profile.fullName}</div>
			<div>looking for a job: {props.profile.lookingForAJob? 'yes' : 'no'}</div>
			<MyPostsContainer store={props.store}/>
		</div>
	)
}

export default Profile;