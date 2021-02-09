import React from 'react';
import classes from './Music.module.css';

const Music = () => {
	return (
		<div className={classes.wrapper}>
			<h2 className={classes.title}>My music</h2>	
			<ul className={classes.songs}>
				<li className={classes.song}>song1</li>
				<li className={classes.song}>song2</li>
				<li className={classes.song}>song3</li>
				<li className={classes.song}>song4</li>
				<li className={classes.song}>song5</li>
			</ul>
		</div>
	)
}

export default Music;