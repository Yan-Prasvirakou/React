import React from 'react';
import classes from './Messages.module.css';
// import { NavLink } from 'react-router-dom';

const LeraMessages = () => {
	return (
		<div className={classes.messages}>
			<div className={classes.message}>Hi, I want you</div>
			<div className={classes.message}>I wanna be tohether with you</div>
			<div className={classes.message}>One more message</div>
			<div className={classes.message}>Can we meet one another tomorrow?</div>
		</div>
	)
}

export default LeraMessages;