import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, addLikeAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { ProfileType, PostType } from '../../../redux/types/types';


// type MapStateToPropsType = {
// 	profilePage: ProfileType
	// profile: ProfileType | null
// }



// type MapDispatchToPropsType = {
// 	status: string
// 	posts: Array<PostType>
// }



let mapStateToProps = (state: AppStateType) => {
	return {
		profilePage: state.profilePage,

	}
}

let mapDispatchToProps = (dispatch: any) => {
	return {
		addPost: (postText: string) => {
			let action = addPostActionCreator(postText);
			dispatch(action)
		},
		addLike: (likedPostId: number) => {
			dispatch(addLikeAC(likedPostId))
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;