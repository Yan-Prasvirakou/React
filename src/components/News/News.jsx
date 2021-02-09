import React from 'react';
import classes from './News.module.css';

const News = () => {
	return (
		<div>
			<h2 className={classes.title}>Latest news</h2>
			<ul>
				<li>event 1</li>
				<li>event 2</li>
				<li>event 3</li>
				<li>event 4</li>
			</ul>
		</div>
	)
}

export default News;