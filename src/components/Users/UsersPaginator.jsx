import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';

let Paginator = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let curPage = props.currentPage;


	let PageLink = (props) => {
		let path = props.path == `/users/pages/1` ? `/users` : props.path;

		return (
			<span>
				<NavLink to={path} 
					className={classes.notSelectedPage}
					activeClassName={classes.selectedPage}
					onClick={() => { props.onPageChanged(props.page) }}
					exact={true}
				>
					{props.page}
				</NavLink>
			</span>
		)
	}

	let CurrentPagesNums = props.renderPagination()
		.map((page, i) => 
			<PageLink currentPage={curPage} page={page} onPageChanged={props.onPageChanged}
				path={`/users/pages/${page}`}
			/>
		)
	


	return (
		<div className={classes.pagesCountWrap}>
			{
				curPage >= 4
				&& <span onClick={() => { props.onPageChanged(1) }}>
					<NavLink to={`/users`} className={classes.pagBtn}>
						FIRST
					</NavLink>
				</span>
			}
			{
				curPage > 1
				&& <span onClick={() => { props.onPageChanged(curPage - 1) }}>
					<NavLink to={curPage == 2 ? `/users` : `/users/pages/${curPage - 1}`} className={classes.pagBtn}>
						PREV
					</NavLink>
				</span>
			}

			{CurrentPagesNums}
			
			{
				curPage < pagesCount
				&& <span onClick={() => { props.onPageChanged(curPage + 1) }}>
					<NavLink to={`/users/pages/${curPage + 1}`} className={classes.pagBtn}>
						NEXT
					</NavLink>
				</span>
			}
			{
				props.totalUsersCount > 0
				&& curPage <= pagesCount - 3
				&& <span onClick={() => { props.onPageChanged(pagesCount) }}>
					<NavLink to={`/users/pages/${pagesCount}`} className={classes.notSelectedPage} activeClassName={classes.selectedPage}>
							{pagesCount}
					</NavLink>
				</span>
			}
		</div>
	)
}

export default Paginator;