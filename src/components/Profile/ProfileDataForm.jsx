import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import classes from './Profile.module.css';


const ProfileDataForm = ({ profile, saveProfile, deactivateEditMode }) => {

	return (
		<Formik
			initialValues={{
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

					{Object.keys(profile.contacts).map(key => {
						return (
							<div key={key}>
								<span>{key}:</span>
								<input type={'url'} className={classes.ProfileDataFormInput}
									name={'contacts.' + key} id={'contacts.' + key}
									onChange={handleChange} onBlur={handleBlur} value={values.contacts[key]}
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