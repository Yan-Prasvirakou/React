import React from 'react';
import classes from './Users.module.css';
import Paginator from './UsersPaginator';
import User from './User';
import UserSearchForm from './UserSearchForm';
import { UserType } from '../../redux/types/types';
import { FilterType } from '../../redux/users-reducer';


type PropsType = {
	pageTitle: string
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	isFetching: boolean
	users: Array<UserType>
	follow: (userId: number) => void
	followingInProgress: Array<number>
	unfollow: (userId: number) => void
	setCurrentPage: (currentPage: number) => void
	renderPagination: () => Array<number>
	onFilterChanged: (filter: FilterType) => void
}


let Users: React.FC<PropsType> = ({
	pageTitle, totalUsersCount, pageSize, currentPage, onPageChanged, isFetching,
	users, follow, followingInProgress, unfollow, onFilterChanged, renderPagination
}) => {

	let paginator = <Paginator
		currentPage={currentPage}
		onPageChanged={onPageChanged}
		totalUsersCount={totalUsersCount}
		pageSize={pageSize}
		renderPagination={renderPagination}
	/>


	return (
		<div className={classes.usersWrap}>
			<h2>{pageTitle}</h2>

			<div className={classes.userSearchForm}>
				<UserSearchForm onFilterChanged={onFilterChanged }/>
			</div>
			
			<div>{paginator}</div>
			

			<div className={isFetching ? classes.usersPagesWrapFetching : classes.usersPagesWrap}>
				{isFetching
					? null
					: users.map((user) =>
						<User
							key={user.id} user={user} follow={follow}
							followingInProgress={followingInProgress} unfollow={unfollow}
						/>
					)
				}
			</div>

			{paginator}
		</div>
	)
}

export default Users;