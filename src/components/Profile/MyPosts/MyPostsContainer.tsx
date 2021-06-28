import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, addLikeAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { ProfileType, PostType } from '../../../redux/types/types';


let mapStateToProps = (state: AppStateType) => {
	return {
		profilePage: state.profilePage,

	}
}


const MyPostsContainer = connect(mapStateToProps, {
	addPost: addPostActionCreator, addLike: addLikeAC
})(MyPosts);

export default MyPostsContainer;