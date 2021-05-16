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
	

	let createBtn = (condition, PageNum, textContent) => {
		return condition
			&& <span onClick={() => { props.onPageChanged(PageNum) }} className={classes.pagBtn}>
					{textContent}
				</span>
	}
	

	return (
		<div className={classes.pagesCountWrap}>
			{createBtn(curPage > 5, 1, 'FIRST')}
			{createBtn(curPage > 1, curPage - 1, 'PREV')}
			{CurrentPagesNums}
			{createBtn(curPage < pagesCount, curPage + 1, 'NEXT')}
			{createBtn(curPage < pagesCount - 4, pagesCount, pagesCount)}
		</div>
	)
}

export default Paginator;