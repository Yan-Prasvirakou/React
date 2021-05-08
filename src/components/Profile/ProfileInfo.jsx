import React, {useState, useEffect} from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Preloader from '../common/Preloader'
import MishaAva from '../Users/img/MishaAva.jpg';
import ProfileDataForm from './ProfileDataForm';



const ProfileInfo = (props) => {

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	}

	let [editMode, setEditMode] = useState(false);

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
	}
	
	const Contact = ({contactTitle, contactValue}) => {
		return <div>{contactTitle}: {contactValue}</div>
	}

	const Contacts = Object.keys(props.profile.contacts).map(key => {
		return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
	})

	const ProfileData = (props) => {
		return (
			<>
				
				{props.isOwner && <button onClick={props.activateEditMode}>edit</button>}
				<div>about user: {props.profile.aboutMe}</div>
				<div>full name: {props.profile.fullName}</div>
				<div>skills: {props.profile.lookingForAJobDescription}</div>
				<div>looking for a job: {props.profile.lookingForAJob? 'yes' : 'no'}</div>
				<p>Contacts:</p>
				{Contacts}
			</>
		)
	}


		

	return (
		<>
			<img className={classes.content__img} src='https://www.aeroflot.ru/media/aflfiles/by/msq/msq_2.jpg'/>
			<img className={classes.userAva} src={props.profile.photos.large ? props.profile.photos.large : MishaAva} />
			{props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
			{editMode 
				? <ProfileDataForm profile={props.profile} saveProfile={props.saveProfile} deactivateEditMode={deactivateEditMode}/>
				: <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={activateEditMode} />
			}
		</>
	)
}

export default ProfileInfo;