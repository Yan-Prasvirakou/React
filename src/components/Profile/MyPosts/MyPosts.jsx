import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	// console.log(props);
	return (
		<div className={classes.content}>
			<div>
				my posts
					<div>new post</div>
				<div>
					<textarea></textarea>
					<button>Add Post</button>
					</div>
			</div>
			<div className={classes.posts}>
				posts
				<Post message="Hello word" likes="4"/>
				<Post message="It's just my second post" likes="11"/>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}

export default MyPosts;