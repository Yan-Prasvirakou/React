import React from 'react';
import classes from './Users.module.css';
import Paginator from '../common/Paginator';
import User from './User';
import MishaAva from './img/MishaAva.jpg';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


let Users = ({
	totalUsersCount, pageSize, currentPage, onPageChanged,
	users, follow, followingInProgress, unfollow, ...props }) => {

	return (
		<div className={classes.usersWrap}>
			<Paginator
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
			/>
			<h2>Users-list</h2>
			{
				users.map(user =>
					<User
						key={user.id} user={user} follow={follow} 
						followingInProgress={followingInProgress} unfollow={unfollow}
					/>
				)
			}
		</div>
	)
}

export default Users;