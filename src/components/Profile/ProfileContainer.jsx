import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserAccountById } from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


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
	profile: state.profilePage.profile,
})

export default compose(
	connect(mapStatetoProps, { getUserAccountById }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)




