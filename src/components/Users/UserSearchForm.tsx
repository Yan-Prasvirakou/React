import React from 'react';
import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import { FilterType } from '../../redux/users-reducer';
import { getUsersFilter } from '../../redux/users-selectors'


// type SearchFormPropsType = {
// 	onFilterChanged: (filter: FilterType) => void
// }

type FormType = {
	// term: string
	// friend: 'true' | 'false' | 'null'
	onFilterChanged: (filter: FilterType) => void
}

type FriendFormType = 'true' | 'false' | 'null'


const SearchForm: React.FC<FormType> = React.memo((props) => {

	// const submit = (values: FormType, {setSubmitting} : {setSubmitting: boolean}) => {

	// }
	const filter = useSelector(getUsersFilter)

	return (
		<Formik
			enableReinitialize
			initialValues={{ term: filter.term, friend: `${filter.friend}` as FriendFormType}}
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
					<button type={'submit'}>Search</button>

				</form>
			)}

		</Formik>
	)
})


const UserSearchForm: React.FC<FormType> = (props) => {
	return <SearchForm onFilterChanged={props.onFilterChanged}	/>
}

export default UserSearchForm