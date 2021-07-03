import React from 'react';
import { getIsFetching } from '../../redux/users-selectors';
import { useSelector } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader';


type UsersPagePropsType = {
	pageTitle: string
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
	const isFetching = useSelector(getIsFetching)
	return <>
		{isFetching ? <Preloader /> : null}
		<Users pageTitle={props.pageTitle} isFetching={isFetching}/>
	</>
}
