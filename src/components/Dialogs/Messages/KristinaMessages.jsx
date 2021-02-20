import React from 'react';
import classes from './Messages.module.css';
// import { NavLink } from 'react-router-dom';

const KristinaMessages = () => {
	return (
		<div className={classes.messages}>
			<div className={classes.incoming}>Hi, Ian</div>
			<div className={classes.outgoing}>Hi, Kristina</div>
			<div className={classes.outgoing}>Let's go walking outside</div>
			<div className={classes.outgoing}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
				Ea eum necessitatibus impedit qui aperiam pariatur 
				repudiandae nisi error facilis? Provident possimus nisi, nostrum, 
				voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.
			</div>
			<div className={classes.incoming}>I have good name</div>
			<div className={classes.incoming}>I like it</div>
			<div className={classes.incoming}>I like it</div>
			<div className={classes.incoming}>I like it</div>
			<div className={classes.incoming}>I like it</div>
			<div className={classes.incoming}>I like it</div>
			<div className={classes.incoming}>Where are you from?</div>
			<div className={classes.incoming}>Where are you from?</div>
			<div className={classes.incoming}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
				Ea eum necessitatibus impedit qui aperiam pariatur 
				repudiandae nisi error facilis? Provident possimus nisi, nostrum, 
				voluptatum ratione itaque nemo ut officia aut odit fuga quisquam. 
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
				Ea eum necessitatibus impedit qui aperiam pariatur 
				repudiandae nisi error facilis? Provident possimus nisi, nostrum, 
				voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.
			</div>
		</div>
	)
}

export default KristinaMessages;