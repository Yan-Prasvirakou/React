import styled, { css } from 'styled-components'

export const StyledTitle = styled.h2<{color: string}>`
	color: ${props => props.color};
	text-align: center;
	text-transform: uppercase;
`

export const StyledNewsWrap = styled.div`
	overflow-y: scroll;
	height: 100%;
	&::-webkit-scrollbar {
		width: 8px;
	};
	&::-webkit-scrollbar-thumb {
		background: #050f3b;
		border-radius: 10px;
		border: 1px solid #fff;
	};
	&::-webkit-scrollbar-track {
		background: none;
	};
	&::-webkit-scrollbar-button {
		background: transparent;
		height: 0;
	};
	&::-webkit-scrollbar-corner {
		background: transparent;
	}
`


export type StyledNewsListType = {
	color: string
	background: string
	styleFromProps: boolean
}

export const StyledNewsList = styled.ul<StyledNewsListType>`
	color: ${props => props.color};
	text-align: center;
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`

type StyledLiType = {
	styleFromProps: boolean;
	color: string;
	borderRadius: string
	// id: number
}

export const StyledLi = styled.li<StyledLiType>`
	position: relative;
	text-decoration: none;
	min-height: 200px;
	border: 2px solid ${props => props.color};
	margin: 8px;
	box-sizing: border-box;
	text-align: center;
	border-radius: 8px;
	cursor: pointer;
	overflow: hidden;
	transition: .6s;
	:hover {
		box-shadow: 0px 4px 12px 8px rgba(5, 15, 59, 0.3);
	};
	${props => props.styleFromProps && css<{ borderRadius: string }>`
		width: ${props => props.theme.columnsWidth.twoColumns};
		border-radius: ${props => props.borderRadius || '0'};
		@media (${props => props.theme.media.desktop}) {
			width: ${props => props.theme.columnsWidth.threeColumns};
		}
		@media (${props => props.theme.media.tablet}) {
			width: ${props => props.theme.columnsWidth.oneColumn};
		}
	`
	}
	a {
		text-decoration: none;
		color: ${props => props.color};
	}
`
// const StyledNewsList2 = styled(StyledNewsList)`color: red`
// в сктроке выше StyledNewsList2 наследует слили от StyledNewsList
// меняется лишь стиль цвета, то есть стиль расширется на основе уже сущсествующего стиля

export const StyledImgWrap = styled.div`
	width: 100%;
	
	img {
		border-radius: 8px 8px 0 0;
		width: 100%;
		margin-top -4px
	}
`

export const StyledTextWrap = styled.div`
	padding: 8px;
	width: 100%;
	
`

export const StyledFullScreenEventWrap = styled.div`
	padding: 8px;
	width: 100%;
	h3 {
		text-align: center
	}
	img {
		width: 50%;
		margin: 10px auto;
		display: block;
	}
`

