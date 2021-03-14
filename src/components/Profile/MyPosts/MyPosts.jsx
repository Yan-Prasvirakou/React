import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
	let posts = props.profilePage.posts;
	let newPostText = props.profilePage.newPostText;

	const PostItem = (props) => {
		let likesBlock = props.likes ? props.likes : 'like';

		return (
			<Post message={props.message} likes={likesBlock} />
		)
	}

	let postsElements = posts
		.reverse()
		.map(post => <PostItem message={post.msg} likes={post.likes} />)

		
	let newPostEl = React.createRef();
	
	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostEl.current.value;
		props.updateNewPostText(text);
	}


	return (
		<div className={classes.content}>
			<div>
				<div className={classes.addNP}>add new post</div>
				<div className={classes.addPost}>
					<textarea
						className={classes.textarea}
						ref={newPostEl}
						onChange={onPostChange}
						value={newPostText}
					/>
					<button className={classes.addBtn} onClick={onAddPost}>
						Add Post
					</button>
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