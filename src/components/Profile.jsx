import React from 'react';
import './Profile.module.css';

const Profile = () => {
	return (
		<div className='content'>
			<div><img src='https://www.aeroflot.ru/media/aflfiles/by/msq/msq_2.jpg'/></div>
			<div>Ava + discription</div>
			<div>
				my posts
					<div>new post</div>
			</div>
			<div className='posts'>posts
				<div className='item'>post1</div>
				<div className='item'>post2</div>
			</div>
		</div>
	)
}

export default Profile;