import React from 'react';
import classes from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile, getUserAccountById } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
// import { profileAPI } from '../../api/api';



class ProfileContainer extends React.Component {
	
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) userId = 2;
		this.props.getUserAccountById(userId)
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}
	
}

let mapStatetoProps = (state) => ({
	profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStatetoProps, { setUserProfile, getUserAccountById })(WithUrlDataContainerComponent);