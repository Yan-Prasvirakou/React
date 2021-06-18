import React from 'react';
import preloader from './preloader.svg'
import classes from './Common.module.css';

let Preloader = () => {
	return (
		<img src={preloader} className={classes.preloader}/>
	)
}

export default Preloader;