import React, { useState, useEffect, ChangeEvent, MouseEventHandler } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NewsList from './NewsList';
import Event from './Event';
import FullScreenEvent from './FullScreenEvent';
import EventType from '../../redux/news-reducer'
import { StyledTitle, StyledLi, StyledNewsWrap} from './styledForNews'


export type DefaultThemeType = typeof theme

const theme = {
	columnsWidth: {
		oneColumn: '94%',
		twoColumns: '45%',
		threeColumns: '30%'
	},
	media: {
		tablet: 'max-width: 680px',
		desktop: 'min-width: 1024px'

	}
}


type EventType = {
	id: number
	title: string
	subtitle: string
	text: string
	isOpened: boolean
	img: string
}


type NewsPropsType = {
	newsBlock: { news: Array<EventType> }
	changeOpenedStatus: (postId: number) => void
}


const News: React.FC<NewsPropsType> = (props) => {

	let news = props.newsBlock.news
	let mainColor = '#050f3b'


	let Events = news.map(el => {
		return (
			
			<StyledLi styleFromProps color={mainColor} borderRadius={'8px'} key={el.id} id={`${el.id}`} >
				<NavLink to={`/news/${el.id}`} key={el.id} >
					<Event
						title={el.title} subtitle={el.subtitle} text={el.text} img={el.img} id={el.id}
						isOpened={el.isOpened} changeOpenedStatus={props.changeOpenedStatus} 
						/>
				</NavLink>
			</StyledLi>
		)
	})


	const FullScreenEvents = news.map(el => {
		return (
			<Route path={`/news/${el.id}`} key={el.id} render={
				() => <FullScreenEvent
					title={el.title} subtitle={el.subtitle} text={el.text} img={el.img} id={el.id}
					isOpened={el.isOpened} changeOpenedStatus={props.changeOpenedStatus} 
				/>}
			/>
			
		)
	})

	
	return (
		<>
			<Switch>
			
			{FullScreenEvents}
			<Route path={`/`} render={
				() => <StyledNewsWrap>
					<ThemeProvider theme={theme}>
						<StyledTitle color={mainColor}>
							Latest news
						</StyledTitle>
						<NewsList
							styleFromProps color={mainColor} background={'transparent'}
						>
							{Events}
						</NewsList>
					</ThemeProvider>
				</StyledNewsWrap>
			} />
				
			</Switch>
		</>
	)
}

export default News as React.FC;