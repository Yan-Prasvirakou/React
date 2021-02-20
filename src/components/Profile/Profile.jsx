import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {



	return (
		// <div>
			<div>
			<img className={classes.content__img} src='https://www.aeroflot.ru/media/aflfiles/by/msq/msq_2.jpg'/>
				<div>Status, discription, status, discription</div>
				<MyPosts posts={props.posts}/>
			</div>
			
		// </div>
	)
}

export default Profile;