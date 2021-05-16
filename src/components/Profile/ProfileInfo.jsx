import React, {useState, useEffect} from 'react';
import classes from './Profile.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
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

	// let [inputFileInnerText, changeInputFileInnerText] = useState('Change photo');
	// let fileName = React.createRef();
	// let onFileChange = (e) => {
	// 	console.log(fileName.current.value);
	// }
	
	const Contact = ({contactTitle, contactValue}) => {
		return <div><b><i>{contactTitle}:</i></b> {contactValue}</div>
	}

	const Contacts = Object.keys(props.profile.contacts).map(key => {
		return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
	})

	const ProfileData = (props) => {
		return (
			<div className={classes.aboutUser}>
				<div><b>about user:</b> {props.profile.aboutMe}</div>
				<div><b>full name:</b> {props.profile.fullName}</div>
				<div><b>skills:</b> {props.profile.lookingForAJobDescription}</div>
				<div><b>looking for a job:</b> {props.profile.lookingForAJob? 'yes' : 'no'}</div>
				<p className={classes.aboutUserContactsTitle}><b>CONTACTS:</b></p>
				{Contacts}
				{props.isOwner && <button className={classes.changeInfo} onClick={props.activateEditMode}>edit</button>}
			</div>
		)
	}
		

	return (
		<div className={classes.infoWrapper}>
			<div className={classes.userAvaAndStatus}>
				<div className={classes.userAvaWrap}>
					<img className={classes.userAva} src={props.profile.photos.large ? props.profile.photos.large : MishaAva} />
				</div>
				{
					props.isOwner &&
					<div>
						<label className={classes.changePhoto} htmlFor={'inputFile'}>
							<span>change photo</span>
							<input type={'file'} onChange={onMainPhotoSelected} id={'inputFile'}/>
						</label>
					</div>
				}
					<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
			</div>
			<div className={classes.userContacts}>
				{editMode
					? <ProfileDataForm profile={props.profile} saveProfile={props.saveProfile} deactivateEditMode={deactivateEditMode}/>
					: <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={activateEditMode} />
				}
			</div>
		</div>
	)
}

export default ProfileInfo;