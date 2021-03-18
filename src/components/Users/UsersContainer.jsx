import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users'


class UsersAPIComponent extends React.Component {

	//стандартный метод классовой компоненты, который срабатывает после того, как в браузерной строке появляется ее урл
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.setUsers(res.data.items);
				this.props.setTotalUsersCount(res.data.totalCount / 100)//network - all - preview
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.setUsers(res.data.items)
			})
	}

	render() {
		return <Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			onPageChanged={this.onPageChanged}
		/>
	}

}

// ========================================

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;