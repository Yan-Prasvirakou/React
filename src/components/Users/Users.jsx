import React from 'react';
import classes from './Users.module.css';
import MishaAva from './img/MishaAva.jpg';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className={classes.usersWrap}>
			<div className={classes.pagesCountWrap}>
				{pages.map(page => {
					return <span className={props.currentPage === page && classes.selectedPage}
						onClick={() => { props.onPageChanged(page) }}>{page}</span>
				})}
			</div>
			<h2>Users-list</h2>
			{
				props.users.map(user => <div key={user.id} className={classes.userItem}>
					<div className={classes.avaAndBtn}>
						<NavLink to={`profile/${user.id}`}>
							<div className={classes.ava}>
								<img src={user.photos.small == null ? MishaAva : user.photos.small} />
							</div>
						</NavLink>

						{user.followed
							? <button className={classes.btn} onClick={() => {
								axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
									withCredentials: true,
									headers: {
										'API-KEY': '5a7f3e81-c5b3-4c7c-8240-5a3fa44e0f4b'
										// 'API-KEY'
									}
								})
									.then(res => {
										if (res.data.resultCode === 0) {
											props.unfollow(user.id)
										}
									});
							}}>Unfollow</button>
							: <button className={classes.btn} onClick={() => {
									axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, null, {
										withCredentials: true,
										headers: {
											'API-KEY': '5a7f3e81-c5b3-4c7c-8240-5a3fa44e0f4b'
										}
									})
										.then(res => {
											if (res.data.resultCode === 0) {
												props.follow(user.id)
											}
										});
									}}>Follow</button>}
					</div>
					<div className={classes.userInfo}>
						<h3>{user.name}</h3>
						<div>user.location.country, user.location.city</div>
						<div>{user.status}</div>
					</div>
				</div>
				)
			}

		</div>
	)
}

export default Users;