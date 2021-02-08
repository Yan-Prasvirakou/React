import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img src="https://www.darkside.ru/band/1732/cover/8922.jpg"/>
			{props.message}
			<span>likes {props.likes}</span>
			{/* передать через пропсы кол-во лайков */}
		</div>
	)
}

export default Post;