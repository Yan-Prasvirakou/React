import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
	// props = {store: undefined}
	return (
		<div className={classes.profile__content}>
			<img className={classes.content__img} src='https://www.aeroflot.ru/media/aflfiles/by/msq/msq_2.jpg'/>
				<div>Status, discription, status, discription</div>
				<MyPostsContainer store={props.store}/>
			</div>
	)
}

export default Profile;