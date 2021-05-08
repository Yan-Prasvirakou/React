import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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


const LoginForm = (props) => {

	const loginValidation = Yup.object().shape({
		email: Yup.string().email('Enter right email')
			.min(2, 'Must have more than 2 characters')
			.max(30, 'Must be shorter than 30 characters')
			.required('Must enter an email'),
		password: Yup.string()
			.min(4, 'Too short')
			.max(30, 'Must be shorter than 30 characters')
			.required('Must enter a password'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password')], `passwords don't coincide`)
			.min(4, 'Too short')
			.max(30, 'Must be shorter than 30 characters')
			.required('Must enter a password'),
		captcha: props.captchaUrl && Yup.string().required('enter symbols from picture'),
		// captcha: Yup.string().min(1, 'enter symbols from picture'),
	})


	return (
		<Formik
			initialValues={props.captchaUrl ? { email: '', password: '', confirmPassword: '', captcha: '' }
				: { email: '', password: '', confirmPassword: '' }}
			validationSchema={loginValidation}
			onSubmit={(values, {setSubmitting, resetForm}) => {
				setSubmitting(true);
				props.login(values.email, values.password, values.rememberMe, values.captcha)
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
					<>
					<div>values: {JSON.stringify(values)}</div>
					<div>errors: {JSON.stringify(errors)}</div>
					<div>touched: {JSON.stringify(touched)}</div>
					</>
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
					
					<div>
					{/* <p>enter symbols from picture</p> */}
						{props.captchaUrl && <img src={props.captchaUrl}/>}
						{
							props.captchaUrl
							&& <input
								name={'captcha'}
								id={'captcha'}
								type={'text'}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.captcha}
							/>
						}
						{props.captchaUrl && <Error touched={touched.captcha} msg={errors.captcha} />}
					</div>

					<button 
						type={'submit'} 
						disabled={
							isSubmitting || !dirty || values.confirmPassword != values.password
							|| errors.password || errors.confirmPassword || errors.email
							|| values.confirmPassword == '' || values.password == ''
							|| (props.captchaUrl && !values.captcha)
						}
					>
						Login
					</button>

					{props.isWrongDataEntered && <WrongData />}
					
				</form>
			)}
			
		</Formik>
	)
}

// вынести формы в отдельные компоненты?
// зарефакторить при необходимости формы передав через пропс дочерние компоненты


const Login = ({ isAuth, isWrongDataEntered, login, captchaUrl}) => {

	if (isAuth) {
		return <Redirect to={'/profile'}/>
	}

	return (
		<div>
			<h2>LOGIN</h2>
			<LoginForm isWrongDataEntered={isWrongDataEntered} login={login}
				captchaUrl={captchaUrl}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth,
	isWrongDataEntered: state.auth.isWrongDataEntered
})

export default connect(mapStateToProps, {login}) (Login);