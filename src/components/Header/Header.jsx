import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
	// debugger
	return (
		<header className={classes.header}>
			<img src='https://ggscore.com/media/logo/t14977.png' />
			<div className={classes.loginBlock}>
				{props.isAuth 
					? <div>{props.login} <button onClick={props.logout}>Log out</button> </div>
					: <NavLink to={'/login'}>Login</NavLink>
				}
			</div>
		</header>
	)
}

export default Header;