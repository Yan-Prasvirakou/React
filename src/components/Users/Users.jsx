import React from 'react';
import classes from './Users.module.css';



const Users = (props) => {
	return <div className={classes.usersWrap}>
			<h2>Users-list</h2>
			{
				props.usersPage.users.map(user => <div key={user.id} className={classes.userItem}>
						<div className={classes.avaAndBtn}>
							<div className={classes.ava}>
								<img src={user.ava}/>
							</div>
						
						{user.followed 
						? <button onClick={()=> props.unfollow(user.id)} className={classes.btn}>unfollow</button>
						: <button onClick={()=> props.follow(user.id)} className={classes.btn}>follow</button>}
						</div>
						<div className={classes.userInfo}>
							<h3>{user.fullName}</h3>
						<div>{user.location.country}, {user.location.city}</div>
							<div>{user.status}</div>
						</div>
					</div>
				)
			}
		</div>

}

export default Users;