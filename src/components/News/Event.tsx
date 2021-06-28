import React from 'react';
import { StyledImgWrap, StyledTextWrap } from './styledForNews'


	type EventPropsType = {
		title: string
		id: number
		subtitle: string
		text: string
		isOpened: boolean
		img: string
		changeOpenedStatus: (postId: number) => void
	}

	let Event: React.FC<EventPropsType> = (props) => {

		return (
			<>
				<StyledImgWrap><img src={props.img} alt="failed to load image" /></StyledImgWrap>
				<StyledTextWrap>
					<h3>{props.title}</h3>
					<p>{props.subtitle}</p>
				</StyledTextWrap>
			</>
		)
	}


export default Event;