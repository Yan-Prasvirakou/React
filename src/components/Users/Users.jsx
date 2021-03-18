import React from 'react';
import classes from './Users.module.css';
import MishaAva from './img/MishaAva.jpg';

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
						<div className={classes.ava}>
							<img src={user.photos.small == null ? MishaAva : user.photos.small} />
						</div>

						{user.followed
							? <button onClick={() => props.unfollow(user.id)} className={classes.btn}>unfollow</button>
							: <button onClick={() => props.follow(user.id)} className={classes.btn}>follow</button>}
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