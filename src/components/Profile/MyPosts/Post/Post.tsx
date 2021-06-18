import React, {MouseEvent} from 'react';
import classes from './Post.module.css';

type PropsType = {
	message: string
	likes: number
	ava: string
	key: number
	id: number
	isLiked: boolean
	addLike: (likedPostId: number) => void
}

const Post: React.FC<PropsType> = (props) => {
	
	let onLikePush = (e: MouseEvent<HTMLSpanElement>) => {

		let PostId = (e.target as HTMLSpanElement).id
		{/* let PostId = e.target.id; */}
		props.addLike(+PostId);
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
					onClick={onLikePush} id={`${props.id}`}
				>
						&#9829; {props.likes ? props.likes : 'like'}
				</span>
			</div>
		</div>
	)
}

export default Post;