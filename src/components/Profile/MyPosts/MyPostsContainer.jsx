import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, addLikeAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,

	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (postText) => {
			let action = addPostActionCreator(postText);
			dispatch(action)
		},
		addLike: (likedPostId) => {
			dispatch(addLikeAC(likedPostId))
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;