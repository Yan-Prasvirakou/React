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
import { compose } from 'redux';




class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.requestUsers(pageNumber, this.props.pageSize)
	}

	renderPagination = () => {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		
		let renderPages = (prevPages, nextPages) => {
			for (let i = this.props.currentPage - prevPages; i <= this.props.currentPage + nextPages; i++) {
				pages.push(i);
			}
		}
		

		switch (this.props.currentPage) {
			case 1:
				renderPages(0, 8) 
				break;
			case 2:
				renderPages(1, 7)
				break;
			case 3:
				renderPages(2, 6)
				break;
			case 4:
				renderPages(3, 5) //2, 8
				break;
			case pagesCount - 3:
				renderPages(6, 3)
				break;
			case pagesCount - 2:
				renderPages(7, 2)
				break;
			case pagesCount - 1:
				renderPages(8, 1)
				break;
			case pagesCount:
				renderPages(9, 0)//10, 0
				break;
			default:
				renderPages(4, 4) // 0, 10
		}
		return pages;
	}

	render() {
		
		// переместить пагинатор в отдельный компонент, чтобы он не исчезал во время загрузки пользователей
		// занулять текущую страницу пользователей при клике на пункт менб юзерс
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
				renderPagination={this.renderPagination}
				setCurrentPage={this.props.setCurrentPage}
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

