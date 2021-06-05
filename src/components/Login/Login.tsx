import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import classes from './Login.module.css';
import ok from './ok.png';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';

type ErrorPropsType = {
	touched: boolean | undefined
	msg: string | undefined
}

const Error: React.FC<ErrorPropsType> = ({touched, msg}) => {
	if (!touched) return null;
	if (msg) return <span className={classes.error}>{msg}</span>;
	return <div className={classes.right}><img src={ok} /></div>;
}

const WrongData = () => {
	return <div className={classes.wrongData}>wrong email or password</div>
}

type LoginFormPropsType = {
	isWrongDataEntered: boolean
	login: (email: string, password: string, captcha: any) => void
	captchaUrl: any
}


const LoginForm: React.FC<LoginFormPropsType> = (props) => {

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
		// если каптча есть, отправлять каптчу, если нет, то без каптчи отправлять
		// но это вряд ли прокатит, т.к. ошибка во время валидации происходит, то есть до момента отправки
	})


	return (
		<Formik
			initialValues={props.captchaUrl ? { email: '', password: '', confirmPassword: '', captcha: '' }
				: { email: '', password: '', confirmPassword: '' }}
			validationSchema={loginValidation}
			onSubmit={(values, {setSubmitting, resetForm}) => {
				setSubmitting(true);
				props.captchaUrl ? props.login(values.email, values.password, values.captcha)
					: props.login(values.email, values.password, null)
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

					<form onSubmit={handleSubmit} className={classes.form}>
					<>
					{/* <div>values: {JSON.stringify(values)}</div>
					<div>errors: {JSON.stringify(errors)}</div>
					<div>touched: {JSON.stringify(touched)}</div> */}
					</>
					<div className={classes.formItemWrap}>
						<input
							name={'email'}
							id={'email'}
							placeholder={"Email"}
							type={'email'}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							className={classes.formInput}
							// вместо теста задать норм класс для инпутов
						/>
						<Error touched={touched.email} msg={errors.email}/>
					</div>
					
					<div className={classes.formItemWrap}>
						<input
							name={'password'}
							id={'password'}
							placeholder={"Password"}
							type={'password'}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							className={classes.formInput}
						/>
						<Error touched={touched.password} msg={errors.password} />
					</div>

					<div className={classes.formItemWrap}>
						<input
							name={'confirmPassword'}
							id={'confirmPassword'}
							placeholder={"Confirm password"}
							type={'password'}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.confirmPassword}
							className={classes.formInput}
						/>
						<Error touched={touched.confirmPassword} msg={errors.confirmPassword} />
					</div>

					{props.isWrongDataEntered && <WrongData />}
					
					<div className={classes.formCaptchaWrap}>
						{props.captchaUrl && <div className={classes.capthaImg}><img src={props.captchaUrl} /></div>}
						{/* {props.captchaUrl && <img className={classes.capthaImg} src={props.captchaUrl} />} */}
						{
							props.captchaUrl
							&& <div className={classes.capthaInput}> <input
								name={'captcha'}
								id={'captcha'}
								type={'text'}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.captcha}
								className={classes.formInput}
							/>
								<Error touched={touched.captcha} msg={errors.captcha} />
							</div>
							
						}
					</div>


					<button 
						type={'submit'}
						className={classes.loginBtn}
						disabled={
							isSubmitting || !dirty || values.confirmPassword != values.password
							|| errors.password || errors.confirmPassword || errors.email
							|| values.confirmPassword == '' || values.password == ''
							|| (props.captchaUrl && !values.captcha)
						}
					>
						Login
					</button>
{/* 
					{props.isWrongDataEntered && errors.email != ''
						&& values.confirmPassword != '' && values.password != '' && <WrongData />} */}

					
					
				</form>
			)}
			
		</Formik>
	)
}

type LoginPropsType = {
	isAuth: boolean
	isWrongDataEntered: boolean
	login: (email: string, password: string, captcha: any) => void
	captchaUrl: string | null
}

const Login: React.FC<LoginPropsType> = ({ isAuth, isWrongDataEntered, login, captchaUrl}) => {

	if (isAuth) {
		return <Redirect to={'/profile'}/>
	}

	return (
		<div className={classes.commonWrapper}>
			<h2 className={classes.formHeader}>LOGIN</h2>
			{/* <div className={classes.formWrapper}> */}
				<LoginForm
					isWrongDataEntered={isWrongDataEntered} login={login}	captchaUrl={captchaUrl}
				/>
			{/* </div> */}
		</div>
	)
}

const mapStateToProps = (state: AppStateType) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth,
	isWrongDataEntered: state.auth.isWrongDataEntered
})

export default connect(mapStateToProps, {login}) (Login);