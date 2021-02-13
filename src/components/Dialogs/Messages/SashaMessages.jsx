import React from 'react';
import classes from './Messages.module.css';

const SashaMessages = () => {
	return (
		<div className={classes.messages}>
			<div className={classes.message}>Hi, my name is Sasha</div>
			<div className={classes.message}>Can I meet you?</div>
		</div>
	)
}

export default SashaMessages;