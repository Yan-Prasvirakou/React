import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik } from 'formik';
import { ProfileType, PostType } from '../../../redux/types/types';

type ProfilePagePropsType = {
	profile: ProfileType
	status: string
	posts: Array<PostType>
}


type PropsType = {
	profilePage: ProfilePagePropsType
	addPost: (postText: string) => void
	addLike: (likedPostId: number) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
	
	let posts = props.profilePage.posts;
	let profile = props.profilePage.profile;

	type PostItemPropsType = {
		message: string
		likes: number
		ava: string
		key: number
		id: number
		isLiked: boolean
		addLike: (likedPostId: number) => void
	}

	const PostItem: React.FC<PostItemPropsType> = (props) => {

		return (
			<Post
				message={props.message} likes={props.likes} ava={props.ava} key={props.id}
				isLiked={props.isLiked} addLike={props.addLike} id={props.id}
			/>
		)
	}


	let postsElements = posts
		.map((post) => <PostItem
			message={post.msg} likes={post.likes} ava={profile.photos.small as string}
			key={post.id} id={post.id} isLiked={post.likedByMe} addLike={props.addLike}
		/>)

		
	let newPost = React.createRef<HTMLTextAreaElement>();

	let onAddPost = () => {
		let newPostCurrent = newPost.current;
		if (newPostCurrent) {
			props.addPost(newPostCurrent.value);
		}
	}


	const PostForm = () => {
		return (
			<Formik
				initialValues={{ postText: '' }}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					console.log('submit')
				}}
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

export default MyPosts as React.FC;