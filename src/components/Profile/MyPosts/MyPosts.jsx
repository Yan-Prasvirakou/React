import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

	const PostItem = (props) => {
		let likesBlock = props.likes ? props.likes : 'like';

		return (
			<Post message={props.message} likes={likesBlock} />
		)
	}

	let postsElements = props.posts
		.reverse()
		.map(post => <PostItem message={post.msg} likes={post.likes} />)


	
		
	let newPostEl = React.createRef();
	
	let addPost = () => {
		props.addPost();
		props.updateNewPostText('');
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
						className={classes.textarea} ref={newPostEl} onChange={onPostChange} value={props.newPostText}
					/>
					<button className={classes.addBtn} onClick={addPost}>
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