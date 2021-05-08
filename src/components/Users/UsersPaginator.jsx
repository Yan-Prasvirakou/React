import React from 'react';
import classes from './Users.module.css';

let Paginator = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let curPage = props.currentPage;


	let PageLink = (props) => {

		return (
			<span
				className={props.page == curPage ? classes.selectedPage : classes.notSelectedPage}
				onClick={() => { props.onPageChanged(props.page) }}
				exact={true}
			>
				{props.page}
			</span>
		)
	}

	let CurrentPagesNums = props.renderPagination()
		.map((page) => 
			<PageLink currentPage={curPage} page={page} onPageChanged={props.onPageChanged} key={page}/>
		)
	


	return (
		<div className={classes.pagesCountWrap}>
			{
				curPage >= 4
				&& <span onClick={() => { props.onPageChanged(1) }} className={classes.pagBtn}>
					FIRST
				</span>
			}
			{
				curPage > 1
				&& <span onClick={() => { props.onPageChanged(curPage - 1) }} className={classes.pagBtn}>
					PREV
				</span>
			}

			{CurrentPagesNums}
			
			{
				curPage < pagesCount
				&& <span onClick={() => { props.onPageChanged(curPage + 1) }} className={classes.pagBtn}>
					NEXT
				</span>
			}
			{
				props.totalUsersCount > 0
				&& curPage <= pagesCount - 3
				&& <span onClick={() => { props.onPageChanged(pagesCount) }} className={classes.notSelectedPage}>
					{pagesCount}
				</span>
			}
		</div>
	)
}

export default Paginator;