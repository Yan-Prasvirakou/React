import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { getUserAccountById } from '../../redux/profile-reducer';
import classes from './Login.module.css';
import ok from './ok.png';

const Error = ({touched, msg}) => {
	if (!touched) return null;
	if (msg) return <span className={classes.error}>{msg}</span>;
	return <div className={classes.right}><img src={ok} /></div>;
}


const loginValidation = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Must have more than 2 characters')
		.max(30, 'Must be shorter than 30 characters')
		.required('Must enter a name'),
	password: Yup.string()
		.min(4, 'Too easy')
		.max(30, 'Must be shorter than 30 characters')
		.required('Must enter a password')
})

const LoginForm = (props) => {
	return (
		<Formik 
			initialValues={{ name: '', password: '', remember: false }}
			validationSchema={loginValidation}
			onSubmit={(values, {setSubmitting, resetForm}) => {// імітація запроса на сервер
				setSubmitting(true);
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					resetForm();
					setSubmitting(false);
				}, 800)
			}}
			>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting
			}) => (
				<form onSubmit={handleSubmit}>
					{JSON.stringify(values)}
					<div>
						<input
							name={'name'}
							id={'name'}
							placeholder={"Login"}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
							className={touched.name && errors.name ? classes.test : null}
							// вместо теста задать норм класс для инпутов
						/>
						<Error touched={touched.name} msg={errors.name}/>
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
					
					<input type={"checkbox"}
						name={'remember'}
						id={'remember'}
						onChange={handleChange}
						value={values.remember}
					/> remember me
					<button type={'submit'} disabled={isSubmitting}>Login</button>
				</form>
			)}
			
		</Formik>
	)
}

// создать для остальных компонентов похожие формы
// убрать из reducer newMsgbody и прочие циклические вещи для формы
// т к оні тепер сохраняются в локальном стейте
// то есть тут мы без редусеров все обновляем через библиотеку
// обновлять элементы формы в сообщениях и в постах аналогичным образом
// дивы заменить формами, иначе работать не будет
// вынести формы в отдельные компоненты
// в сообщениях и постах кнопки должны иметь св-во disabled, если текст не напечатан
// зарефакторить при необходимости формы передав через пропс дочерние компоненты

const Login = (props) => {
	return (
		<div>
			<h2>LOGIN</h2>
			<LoginForm/>
		</div>
	)
}

export default Login;