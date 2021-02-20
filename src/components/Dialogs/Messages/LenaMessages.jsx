import React from 'react';
import classes from './Messages.module.css';
// import { NavLink } from 'react-router-dom';

const LenaMessages = () => {
	return (
		<div className={classes.messages}>
			<div className={classes.incoming}>Hi</div>
			<div className={classes.outgoing}>Hi</div>
			<div className={classes.incoming}>My name is Lena</div>
			<div className={classes.incoming}>HRU?</div>
			<div className={classes.outgoing}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
				Ea eum necessitatibus impedit qui aperiam pariatur 
				repudiandae nisi error facilis? Provident possimus nisi, nostrum, 
				voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.
			</div>
		</div>
	)
}

export default LenaMessages;