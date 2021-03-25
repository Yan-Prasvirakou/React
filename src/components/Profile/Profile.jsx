import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader'
import MishaAva from '../Users/img/MishaAva.jpg';



const Profile = (props) => {
	// debugger
	if (!props.profile) return <Preloader/>
	return (
		<div className={classes.profile__content}>
			<img className={classes.content__img} src='https://www.aeroflot.ru/media/aflfiles/by/msq/msq_2.jpg'/>
			<img className={classes.userAva} src={props.profile.photos.large ? props.profile.photos.large : MishaAva} />
			<div>about user: {props.profile.aboutMe}</div>
			<div>full name: {props.profile.fullName}</div>
			<div>looking for a job: {props.profile.lookingForAJob? 'yes' : 'no'}</div>
			<MyPostsContainer store={props.store}/>
		</div>
	)
}

export default Profile;