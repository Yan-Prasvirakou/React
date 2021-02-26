import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	// if (!props.likes) props.likes ='like';

	return (
		<div className={classes.item}>
			<div className={classes.item__imgAndText}>
				<img className={classes.item__img} src="https://www.darkside.ru/band/1732/cover/8922.jpg" />
				<div className={classes.item__msg}>
					{props.message}
				</div>
			</div>
			
			<div className={classes.item__likes}><span className={classes.likeSymbol}>&#9829;</span> {props.likes}</div>
		</div>
	)
}

export default Post;