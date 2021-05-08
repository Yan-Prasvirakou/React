import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import classes from './Profile.module.css';
import * as Yup from 'yup';
import ok from '../Login/ok.png';
import Profile from './Profile';

const ProfileDataForm = ({ profile, saveProfile, deactivateEditMode }) => {


	const Error = ({ touched, msg }) => {
		if (!touched) return null;
		if (msg) return <span className={classes.error}>{msg}</span>;
		// return <div className={classes.right}><img src={ok} /></div>;
	}

	
	// если не получится проверять каждое поле, то вывести общую ошибку как при неправильном пароле в файле логин
	const profileValidation = Yup.object().shape(

		// Object.keys(profile.contacts).map(key => key: Yup.string().url().required('wrong url adress'))

		// Object.fromEntries(
		// 	Object.entries(profile.contacts)
		// 		.map(([key, value]) => [key, Yup.string().url('enter right url').required('wrong url adress')])
		// )


		// contacts: Yup.string().url().required('wrong url adress')
	)

	return (
		<Formik
			// добавить в инфу ниже пропсы в качестве начального значения
			// сделать редактирование для адресов соцсетей с проверкой на валидность
			initialValues={{
				aboutMe: profile.aboutMe,
				fullName: profile.fullName,
				lookingForAJobDescription: profile.lookingForAJobDescription,
				lookingForAJob: profile.lookingForAJob,
				contacts: profile.contacts
				// ...profile.contacts
			}}
			validationSchema={profileValidation}
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
				// <form onSubmit={() => {console.log(values)}}>
				<form onSubmit={handleSubmit}>
					<div>
						<textarea
							name={'aboutMe'} id={'aboutMe'} placeholder={"write some info about you"}
							onChange={handleChange} onBlur={handleBlur} value={values.aboutMe}
						/>
					</div>
					<div>
						<textarea
							name={'fullName'} id={'fullName'} placeholder={"enter you name and surname"}
							onChange={handleChange} onBlur={handleBlur} value={values.fullName}
						/>
					</div>
					<div>
						<textarea
							name={'lookingForAJobDescription'} id={'lookingForAJobDescription'} placeholder={"discribe your skills"}
							onChange={handleChange} onBlur={handleBlur} value={values.lookingForAJobDescription}
						/>
					</div>

					<input
						type={"checkbox"} name={'lookingForAJob'} id={'lookingForAJob'}
						onChange={handleChange} checked={values.lookingForAJob}
					/> looking for a job

					{Object.keys(profile.contacts).map(key => {
						return (
							<div key={key}>
								{key}: <input type={'url'}
									name={'contacts.' + key} id={'contacts.' + key}
									onChange={handleChange} onBlur={handleBlur} value={values.contacts[key]}
								/>
								{/* <Error touched={touched[key]} msg={errors[key]} /> */}
							</div>
						)
					})}
{/* 
					{Object.keys(profile.contacts).map(key => {
						return (
							<div key={key}>
								{key}: <input type={'url'}
									name={`${key}`} id={`${key}`}
									onChange={handleChange} onBlur={handleBlur} value={values[key]}
								/>
								<Error touched={touched[key]} msg={errors[key]} />
							</div>
						)
					})} */}

					<button type={'submit'}
						// disabled={isSubmitting || !dirty || errors.contacts}
					>
						Save
					</button>

				</form>

			)}

		</Formik>
	)

}

export default ProfileDataForm;