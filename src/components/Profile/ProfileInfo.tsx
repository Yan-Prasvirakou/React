import React, { useState, ChangeEvent} from 'react';
import classes from './Profile.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import MishaAva from '../Users/img/MishaAva.jpg';
import ProfileDataForm from './ProfileDataForm';
import { ProfileType, ContactsType } from '../../redux/types/types';

type PropsType = {
	profile: ProfileType
	status: string
	updateStatus: (status: string) => void
	isOwner: boolean
	savePhoto: (file: any) => void
	saveProfile: (profile: ProfileType) => void
	// store: any
}


const ProfileInfo: React.FC<PropsType> = (props) => {

	const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
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

	type ContactPropsType = {
		key: string
		contactTitle: string
		contactValue: string
		// store: any
	}

	
	const Contact: React.FC<ContactPropsType> = (props)  => {
		return <div><b><i>{props.contactTitle}:</i></b> {props.contactValue}</div>
	}

	const Contacts = Object.entries(props.profile.contacts).map(([key, value]) => {
		return <Contact key={key} contactTitle={key} contactValue={value} />
	})

	type ProfileDataPropsType = {
		profile: ProfileType
		isOwner: boolean
		activateEditMode: () => void
	}


	const ProfileData: React.FC<ProfileDataPropsType> = (props) => {
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