import React from 'react';
import classes from './Users.module.css';
import MishaAva from './img/MishaAva.jpg';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../redux/types/types';

type CurrentUserPropsType = {

	follow: (userId: number) => void
	followingInProgress: Array<number>
	unfollow: (userId: number) => void
	user: UserType
}


let User: React.FC<CurrentUserPropsType> = ({ user, followingInProgress, unfollow, follow, ...props}) => {

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
				<div>{user.status}</div>
			</div>
		</div>
	)

}

export default User;