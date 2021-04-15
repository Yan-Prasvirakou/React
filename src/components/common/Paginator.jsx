import React from 'react';
import userClasses from '../Users/Users.module.css';


let Paginator = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className={userClasses.pagesCountWrap}>
			{pages.map(page => {
				return <span className={props.currentPage === page && userClasses.selectedPage}
						onClick={() => {
						props.onPageChanged(page)}}>{page}</span>
			})}
		</div>
	)
}

export default Paginator;