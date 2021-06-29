import React from 'react';
import { Formik, Field } from 'formik';
import { FilterType } from '../../redux/users-reducer';


type SearchFormPropsType = {
	onFilterChanged: (filter: FilterType) => void
}

type FormType = {
	term: string
	friend: 'true' | 'false' | 'null'
}


const SearchForm: React.FC<SearchFormPropsType> = React.memo((props) => {

	// const submit = (values: FormType, {setSubmitting} : {setSubmitting: boolean}) => {

	// }

	return (
		<Formik
			initialValues={{ term: '', friend: null}}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				const filter: FilterType = {
					term: values.term,
					friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
				}
				setSubmitting(true);
				props.onFilterChanged(filter)
				setSubmitting(false);
			}}
		>
			{({	handleSubmit, isSubmitting }) => (

				<form onSubmit={handleSubmit}>

					<div>

						<Field type='text' name='term'/>
						<Field name='friend' as='select'>
							<option value="null">all</option>
							<option value="true">followed</option>
							<option value="false">unfollowed</option>
						</Field>

					</div>

					<button
						type={'submit'}
						// className={classes.loginBtn}
						// disabled={!!(
						// 	isSubmitting || !dirty || values.confirmPassword != values.password
						// 	|| errors.password || errors.confirmPassword || errors.email
						// 	|| values.confirmPassword == '' || values.password == ''
						// 	|| (props.captchaUrl && !values.captcha))
						// }
					>
						Search
					</button>

				</form>
			)}

		</Formik>
	)
})


const UserSearchForm: React.FC<SearchFormPropsType> = (props) => {
	// const UserSearchForm: React.FC<SearchFormPropsType> = ({ isWrongDataEntered, login, captchaUrl }) => {

	return (
		<SearchForm onFilterChanged={props.onFilterChanged}	/>
	)
}

export default UserSearchForm