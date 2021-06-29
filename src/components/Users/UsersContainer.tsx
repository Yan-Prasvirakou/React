import React from 'react';
import {
	follow,
	unfollow,
	requestUsers,
	actions,
	FilterType
} from '../../redux/users-reducer';
import {
	getUsers,
	getPageSize,
	getTotalUsersCount,
	getCurrentPage,
	getIsFetching,
	getFollowingInProgress,
	getUsersFilter
} from '../../redux/users-selectors';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import { UserType } from '../../redux/types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
	currentPage: number
	pageSize: number
	totalUsersCount: number
	isFetching: boolean
	users: Array<UserType>
	followingInProgress: Array<number>
	filter: FilterType
}

type MapDispatchToPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	requestUsers: (page: number, pageSize: number, filter: FilterType) => void
	setCurrentPage: (currentPage: number) => void
}

type OwnPropsType = {
	pageTitle: string
}


type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType


class UsersContainer extends React.Component<PropsType> {

	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
	}

	onPageChanged = (pageNumber: number) => {
		this.props.requestUsers(pageNumber, this.props.pageSize, this.props.filter)
	}

	onFilterChanged = (filter: FilterType) => {
		this.props.requestUsers(1, this.props.pageSize, filter)
	}

	renderPagination = () => {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages: Array<number> = [];
		
		let renderPageNums = (prevPages: number, nextPages: number) => {
			if (pagesCount > this.props.pageSize * (prevPages + nextPages)) {
				for (let i = this.props.currentPage - prevPages; i <= this.props.currentPage + nextPages; i++) {
					pages.push(i);
				}
			} else {
				for (let i = 1; i <= pagesCount; i++) {
					pages.push(i);
				}
			}
			// for (let i = this.props.currentPage - prevPages; i <= this.props.currentPage + nextPages; i++) {
			// 	pages.push(i);
			// }
		}

		switch (this.props.currentPage) {
			case 1:
				renderPageNums(0, 8) 
				break;
			case 2:
				renderPageNums(1, 7)
				break;
			case 3:
				renderPageNums(2, 6)
				break;
			case 4:
				renderPageNums(3, 5) //2, 8
				break;
			case pagesCount - 3:
				renderPageNums(6, 3)
				break;
			case pagesCount - 2:
				renderPageNums(7, 2)
				break;
			case pagesCount - 1:
				renderPageNums(8, 1)
				break;
			case pagesCount:
				renderPageNums(9, 0)//10, 0
				break;
			default:
				renderPageNums(4, 4) // 0, 10
		}
		return pages;
	}

	render() {
		
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					pageTitle={this.props.pageTitle}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					onFilterChanged={this.onFilterChanged}
					onPageChanged={this.onPageChanged}
					renderPagination={this.renderPagination}
					setCurrentPage={this.props.setCurrentPage}
					isFetching={this.props.isFetching}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}

}

// ========================================


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		filter: getUsersFilter(state)
	}
}

export default compose(
	connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage: actions.setCurrentPage,
		// toggleFollowingProgress,
		requestUsers
	}),
	// withAuthRedirect
)(UsersContainer)

