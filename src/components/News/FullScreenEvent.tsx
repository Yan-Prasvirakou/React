import React from 'react';
import { StyledNewsWrap, StyledFullScreenEventWrap } from './styledForNews'


type EventPropsType = {
	title: string
	id: number
	subtitle: string
	text: string
	isOpened: boolean
	img: string
	changeOpenedStatus: (postId: number) => void
}

let FullScreenEvent: React.FC<EventPropsType> = (props) => {

	return (
		<>
			<StyledNewsWrap>
			<StyledFullScreenEventWrap>
				<h3>{props.title}</h3>
				<img src={props.img} alt="failed to load image" />
					<p><b>{props.subtitle}</b></p>
				<p>{props.text}</p>
			</StyledFullScreenEventWrap>
			</StyledNewsWrap>
		</>
	)
}


export default FullScreenEvent;