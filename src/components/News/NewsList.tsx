import React from 'react';
import { StyledNewsList, StyledNewsListType, StyledLi } from './styledForNews'


type NewsListPropsType = StyledNewsListType & {children: JSX.Element | JSX.Element[] | string | string[]}

const NewsList: React.FC<NewsListPropsType> = ({
	color, styleFromProps, background, children
}) => {

	return (
		<>
			<StyledNewsList
				styleFromProps={styleFromProps} color={color} background={background}
			>
				{children}
			</StyledNewsList>
		</>
	)
}

export default NewsList;