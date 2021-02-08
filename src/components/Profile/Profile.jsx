import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		// <div>
			<div className={classes.content}>
				<img src='https://www.aeroflot.ru/media/aflfiles/by/msq/msq_2.jpg'/>
				<div>Ava + discription</div>
				<MyPosts />
			</div>
			
		// </div>
	)
}

export default Profile;