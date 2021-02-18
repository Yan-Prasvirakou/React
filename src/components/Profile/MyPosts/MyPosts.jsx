import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = (props) => {

	
	// let text = 'My second post My second post My second post My second post My second post My second post My second postMy second post';
	// const posts = [
	// 	{ msg: 'Hello world', likes: 4 },
	// 	{ msg: text, likes: 155 },
	// 	{ msg: '70 лет полет нормальный', likes: 32 },
	// 	{ msg: '12345', likes: 0 },
	// 	{ msg: 'Empty text text text text text', likes: 5 },
	// 	{ msg: 'lorem ipsum', likes: 3 }
	// ]

	const PostItem = (props) => {
		let likesBlock = props.likes ? props.likes : 'like';

		return (
			<Post message={props.message} likes={likesBlock} />
		)
	}

	let postsElements = props.posts
		.reverse()
		.map(post => <PostItem message={post.msg} likes={post.likes} />)	

	return (
		<div className={classes.content}>
			<div>
				<div className={classes.addNP}>add new post</div>
				<div className={classes.addPost}>
					<textarea className={classes.textarea}></textarea>
					<button className={classes.addBtn} placeholder={props.placeholder}>Add Post</button>
				</div>
			</div>
			<div className={classes.posts}>
				<h3 className={classes.newPost}>My posts</h3>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;