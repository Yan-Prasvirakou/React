import React from 'react';
import {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching
} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader'



class UsersContainer extends React.Component {

	//стандартный метод классовой компоненты, который срабатывает после того, как в браузерной строке появляется ее урл
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
			withCredentials: true
		})
			.then(res => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(res.data.items);
				this.props.setTotalUsersCount(res.data.totalCount / 100)//network - all - preview
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
			withCredentials: true
		})
			.then(res => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(res.data.items)
			})
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			{/* common/preloader  - создать отдельную компоненту и убирать пользователй старых во время новых */}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				onPageChanged={this.onPageChanged}
				isFetching={this.props.isFetching}
			/>
		</>
	}

}

// ========================================

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}


export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
})(UsersContainer);

// export default UsersContainer;