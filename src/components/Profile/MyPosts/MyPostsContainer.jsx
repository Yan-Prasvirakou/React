import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
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
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;