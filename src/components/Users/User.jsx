import React from 'react';
import classes from './Users.module.css';
import MishaAva from './img/MishaAva.jpg';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


let User = ({ user, followingInProgress, unfollow, follow, ...props}) => {

	return (
		<div className={classes.userItem}>
			<div className={classes.avaAndBtn}>
				<NavLink to={`profile/${user.id}`}>
					<div className={classes.ava}>
						<img src={user.photos.small == null ? MishaAva : user.photos.small}/>
					</div>
				</NavLink>

				{user.followed
					? <button disabled={followingInProgress.some(id => id === user.id)}
						className={classes.btn} onClick={() => unfollow(user.id)}>Unfollow</button>
					: <button disabled={followingInProgress.some(id => id === user.id)}
						className={classes.btn} onClick={() => follow(user.id)}>Follow</button>}
			</div>
			<div className={classes.userInfo}>
				<h3>{user.name}</h3>
				<div>user.location.country, user.location.city</div>
				<div>{user.status}</div>
			</div>
		</div>
	)

}

export default User;