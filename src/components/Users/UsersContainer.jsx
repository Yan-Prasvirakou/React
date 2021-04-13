import React from 'react';
import {
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
	requestUsers
} from '../../redux/users-reducer';
import {
	getUsers,
	getPageSize,
	getTotalUsersCount,
	getCurrentPage,
	getIsFetching,
	getFollowingInProgress
} from '../../redux/users-selectors';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class UsersContainer extends React.Component {

	//стандартный метод классовой компоненты, который срабатывает после того, как в браузерной строке появляется ее урл
	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.requestUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				onPageChanged={this.onPageChanged}
				isFetching={this.props.isFetching}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}

}

// ========================================


let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleFollowingProgress,
		requestUsers
	}),
	// withAuthRedirect
)(UsersContainer)

