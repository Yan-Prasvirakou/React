import React from 'react';
import classes from './Messages.module.css';
// import { NavLink } from 'react-router-dom';

const NastyaMessages = () => {
	return (
		<div className={classes.messages}>
			<div className={classes.message}>Hi, I have waited for you so long</div>
			<div className={classes.message}>I wanna see u</div>
			<div className={classes.message}>I miss you</div>
		</div>
	)
}

export default NastyaMessages;