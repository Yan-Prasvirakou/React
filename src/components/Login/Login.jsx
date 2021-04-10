import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { getUserAccountById } from '../../redux/profile-reducer';
import { login } from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import classes from './Login.module.css';
import ok from './ok.png';
import { Redirect } from 'react-router-dom';

const Error = ({touched, msg}) => {
	if (!touched) return null;
	if (msg) return <span className={classes.error}>{msg}</span>;
	return <div className={classes.right}><img src={ok} /></div>;
}

const WrongData = () => {
	return <div className={classes.wrongData}>wrong email or password</div>
}


const loginValidation = Yup.object().shape({
	email: Yup.string().email('Enter right email')
		.min(2, 'Must have more than 2 characters')
		.max(30, 'Must be shorter than 30 characters')
		.required('Must enter an email'),
	password: Yup.string()
		.min(4, 'Too easy')
		.max(30, 'Must be shorter than 30 characters')
		.required('Must enter a password'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], `passwords don't coincide`)
		.required('Must enter a password')
})

const LoginForm = (props) => {
	return (
		<Formik 
			initialValues={{ email: '', password: '', confirmPassword: '', remember: false }}
			validationSchema={loginValidation}
			onSubmit={(values, {setSubmitting, resetForm}) => {
				// debugger
				setSubmitting(true);
				props.login(values.email, values.password, values.rememberMe)
				// resetForm({values: ''});
				// resetForm();
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
				<form onSubmit={handleSubmit}>
					{/* {JSON.stringify(values)} */}
					<div>
						<input
							name={'email'}
							id={'email'}
							placeholder={"Email"}
							type={'email'}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							className={touched.email && errors.email ? classes.test : null}
							// вместо теста задать норм класс для инпутов
						/>
						<Error touched={touched.email} msg={errors.email}/>
					</div>
					
					<div>
						<input
							name={'password'}
							id={'password'}
							placeholder={"Password"}
							type={'password'}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							className={touched.password && errors.password ? classes.test : null}
							/>
							<Error touched={touched.password} msg={errors.password} />
						</div>

						<div>
							<input
								name={'confirmPassword'}
								id={'confirmPassword'}
								placeholder={"Confirm password"}
								type={'password'}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.confirmPassword}
								className={touched.password && errors.password ? classes.test : null}
								/>
								<Error touched={touched.confirmPassword} msg={errors.confirmPassword} />
						</div>
					
					<input type={"checkbox"}
						name={'rememberMe'}
						id={'rememberMe'}
						onChange={handleChange}
						value={values.remember}
					/> remember me
					<button 
						type={'submit'} 
						disabled={isSubmitting || !dirty || values.confirmPassword != values.password || errors.email}
					>
						Login
					</button>

					{props.isWrongDataEntered && <WrongData/>}
					{/* можно localstate, но там нужна классовая компонента */}
				</form>
			)}
			
		</Formik>
	)
}

// вынести формы в отдельные компоненты?
// зарефакторить при необходимости формы передав через пропс дочерние компоненты


const Login = (props) => {
	let {isAuth, isWrongDataEntered, login} = props;

	if (isAuth) {
		return <Redirect to={'/profile'}/>
	}

	return (
		<div>
			<h2>LOGIN</h2>
			<LoginForm isWrongDataEntered={isWrongDataEntered} login={login}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	isWrongDataEntered: state.auth.isWrongDataEntered
	// добавить сюда переменную, проверяющую, удачно ли прошла регистрачция
})

export default connect(mapStateToProps, {login}) (Login);