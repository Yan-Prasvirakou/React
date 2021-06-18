import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import classes from './Profile.module.css';
import { ProfileType, ContactsType } from '../../redux/types/types';


// type ProfileToSaveType = {
// 	aboutMe: string
// 	fullName: string
// 	lookingForAJobDescription: string
// 	lookingForAJob: boolean
// 	contacts: ContactsType
// }

type PropsType = {
	profile: ProfileType
	saveProfile: (profile: ProfileType) => void
	deactivateEditMode: () => void
}
// profile = { props.profile } saveProfile = { props.saveProfile } deactivateEditMode = { deactivateEditMode }

const ProfileDataForm: React.FC<PropsType> = ({ profile, saveProfile, deactivateEditMode }) => {

	return (
		<Formik
			initialValues={{
				userId: profile.userId,
				photos: profile.photos,
				aboutMe: profile.aboutMe,
				fullName: profile.fullName,
				lookingForAJobDescription: profile.lookingForAJobDescription,
				lookingForAJob: profile.lookingForAJob,
				contacts: profile.contacts
			}}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				setSubmitting(true);
				saveProfile(values);
				deactivateEditMode();
				setSubmitting(false);
			}}
		>
			{({
				values,
				errors,
				touched,
				dirty,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting
			}) => (
				<form onSubmit={handleSubmit} className={classes.ProfileDataForm}>
					<div>
						<textarea className={classes.ProfileDataFormTextarea}
							name={'aboutMe'} id={'aboutMe'} placeholder={"write some info about you"}
							onChange={handleChange} onBlur={handleBlur} value={values.aboutMe}
						/>
					</div>
					<div>
						<textarea className={classes.ProfileDataFormTextarea}
							name={'fullName'} id={'fullName'} placeholder={"enter you name and surname"}
							onChange={handleChange} onBlur={handleBlur} value={values.fullName}
						/>
					</div>
					<div>
						<textarea className={classes.ProfileDataFormTextarea}
							name={'lookingForAJobDescription'} id={'lookingForAJobDescription'} placeholder={"discribe your skills"}
							onChange={handleChange} onBlur={handleBlur} value={values.lookingForAJobDescription}
						/>
					</div>

					<input
						type={"checkbox"} name={'lookingForAJob'} id={'lookingForAJob'}
						onChange={handleChange} checked={values.lookingForAJob}
					/> looking for a job

					<p className={classes.ProfileDataFormHead}><b>CONTACTS:</b></p>

					{(Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>)
						// .filter(key => profile[key as keyof ProfileType] !== 'photos' && profile[key as keyof ProfileType] !== 'userId')
						.map((key) => {
							return (
								<div key={key}>
									<span>{key}:</span>
									<input type={'url'} className={classes.ProfileDataFormInput}
										name={'contacts.' + key} id={'contacts.' + key}
										onChange={handleChange} onBlur={handleBlur} value={values.contacts[key]}
										// вроде еще можно убрать as Array<keyof typeof profile.contacts>
										// и добавить values.contacts[key as keyof ContactsType]
									/>
								</div>
							)
					})}

					<button className={classes.changeInfo} type={'submit'}>Save</button>

				</form>
			)}
		</Formik>
	)
}

export default ProfileDataForm;