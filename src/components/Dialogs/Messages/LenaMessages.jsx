import React from 'react';
import classes from './Messages.module.css';
// import { NavLink } from 'react-router-dom';

const LenaMessages = () => {
	return (
		<div className={classes.messages}>
			<div className={classes.message}>Hi</div>
			<div className={classes.message}>My name is Lena</div>
			<div className={classes.message}>HRU?</div>
		</div>
	)
}

export default LenaMessages;