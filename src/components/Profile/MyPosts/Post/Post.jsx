import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	
	let onLikePush = (e) => {
		let PostId = e.target.id;
		props.addLike(PostId);
	}

	return (
		<div className={classes.item}>
			<div className={classes.item__imgAndText}>
				<img className={classes.item__img} src={props.ava} />
				<div className={classes.item__msg}>
					{props.message}
				</div>
			</div>
			<div className={classes.item__likes}>
				<span
					className={props.isLiked ? classes.likedSymbol : classes.notLikedSymbol}
					onClick={onLikePush} id={props.id}
				>
					&#9829; {props.likes}
				</span>
			</div>
		</div>
	)
}

export default Post;