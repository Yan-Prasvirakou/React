import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik } from 'formik';


const MyPosts = (props) => {
	
	let posts = props.profilePage.posts;
	let profile = props.profilePage.profile;

	const PostItem = (props) => {
		let likesBlock = props.likes ? props.likes : 'like';

		return (
			<Post
				message={props.message} likes={likesBlock} ava={props.ava}
				isLiked={props.isLiked} addLike={props.addLike} id={props.id}
			/>
		)
	}


	let postsElements = posts
		.map((post) => <PostItem
			message={post.msg} likes={post.likes} ava={profile.photos.small}
			key={post.id} id={post.id} isLiked={post.likedByMe} addLike={props.addLike}
		/>)

		
	let newPost = React.createRef();
	
	let onAddPost = () => {
		let postText = newPost.current.value;
		props.addPost(postText);
	}


	const PostForm = (props) => {
		return (
			<Formik
				initialValues={{ postText: '' }}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
				}) => (
					<form className={classes.addPost}>
						
						<textarea
							name={'postText'}
							id={'postText'}
							placeholder={"write some text"}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.postText}
							// className={touched.name && errors.name ? classes.test : null}
							className={classes.textarea}
							ref={newPost}
						/>
						<button className={classes.addPostBtn}
							disabled={values.postText == '' || !(values.postText).match(/\S/g)}
							onClick={onAddPost}
						>
							Add Post
						</button>
					</form>
				)}
			
			</Formik>
		)
	}



	return (
		<div className={classes.content}>
			<div>
				<div className={classes.addNP}>add new post</div>
				<PostForm/>
			</div>
			<div className={classes.posts}>
				<h3 className={classes.newPost}>My posts</h3>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;