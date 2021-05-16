import React from 'react';
import classes from './Users.module.css';
import Paginator from './UsersPaginator';
import User from './User';

let Users = ({
	totalUsersCount, pageSize, currentPage, onPageChanged, isFetching,
	users, follow, followingInProgress, unfollow, setCurrentPage, renderPagination
}) => {


	let CurrentUsers = () => {
		return users.map((user) =>
			<User
				key={user.id} user={user} follow={follow}
				followingInProgress={followingInProgress} unfollow={unfollow}
			/>
		)
	}

	return (
		<div className={classes.usersWrap}>
			<Paginator
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				setCurrentPage={setCurrentPage}
				renderPagination={renderPagination}
			/>
			{/* this.props.isFetching */}
			<div className={isFetching ? classes.usersPagesWrapFetching : classes.usersPagesWrap}>
				{isFetching ? null : <CurrentUsers/>}
			</div>
			<Paginator
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				setCurrentPage={setCurrentPage}
				renderPagination={renderPagination}
			/>
		</div>
	)
}

export default Users;