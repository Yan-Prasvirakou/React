import React from 'react';
import classes from './Users.module.css';
import Paginator from './UsersPaginator';
import User from './User';
import { UserType } from '../../redux/types/types';


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
}


let Users: React.FC<PropsType> = ({
	pageTitle, totalUsersCount, pageSize, currentPage, onPageChanged, isFetching,
	users, follow, followingInProgress, unfollow, setCurrentPage, renderPagination
}) => {


	return (
		<div className={classes.usersWrap}>
			<h2>{pageTitle}</h2>
			<Paginator
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				// setCurrentPage={setCurrentPage} - не нужна в пропсах?
				renderPagination={renderPagination}
			/>
			
			{/* this.props.isFetching */}
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
			<Paginator
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				// setCurrentPage={setCurrentPage}
				renderPagination={renderPagination}
			/>
		</div>
	)
}

export default Users;