import React from 'react';
import classes from './Messages.module.css';
// import { NavLink } from 'react-router-dom';

const KristinaMessages = () => {
	return (
		<div className={classes.messages}>
			<div className={classes.message}>Hi, Ian</div>
			<div className={classes.message}>I have good name</div>
			<div className={classes.message}>I like it</div>
			<div className={classes.message}>Where are you from?</div>
		</div>
	)
}

export default KristinaMessages;