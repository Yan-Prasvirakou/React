import { AppStateType, InferActionsTypes } from './redux-store';
import cssLogo from '../components/News/img/css.jpg';
import githubLogo from '../components/News/img/github.jpg';
import jsLogo from '../components/News/img/js.jpg';
import tsLogo from '../components/News/img/ts.jpg';
import reactLogo from '../components/News/img/react.jpg';
import stcompLogo from '../components/News/img/stcomp.jpg';

const CHANGE_OPENED_STATUS = 'first-project/news/CHANGE-OPENED-STATUS';

export type EventType = {
	id: number
	title: string
	subtitle: string
	text: string
	isOpened: boolean
	img: string
}

export type NewsStateType = {
	news: Array<EventType>
}

let initialState: NewsStateType = {
	news: [
		{
			id: 6,
			title: 'Event happened with React',
			subtitle: `
				lorem ipsum React lorem ipsum React lorem ipsum React lorem ipsum React lorem ipsum React 
			`,
			text: `
				No in he real went find mr. 
				Wandered or strictly raillery stanhill as. 
				Jennings appetite disposed me an at subjects an. 
				To no indulgence diminution so discovered mr apartments. 
				Are off under folly death wrote cause her way spite. 
				Plan upon yet way get cold spot its week. 
				Almost do am or limits hearts. 
				Resolve parties but why she shewing. 
				She sang know now how nay cold real case.
				No in he real went find mr. 
				Wandered or strictly raillery stanhill as. 
				Jennings appetite disposed me an at subjects an. 
				To no indulgence diminution so discovered mr apartments. 
				Are off under folly death wrote cause her way spite. 
				Plan upon yet way get cold spot its week. 
				Almost do am or limits hearts. 
				Resolve parties but why she shewing. 
				She sang know now how nay cold real case.
			`,
			isOpened: false,
			img: reactLogo
		},
		{
			id: 5,
			title: 'Event happened with JS',
			subtitle: `
				lorem ipsum JS lorem ipsum JS lorem ipsum JS lorem ipsum JS lorem ipsum JS lorem ipsum JS
			`,
			text: `
				He an thing rapid these after going drawn or. 
				Timed she his law the spoil round defer. 
				In surprise concerns informed betrayed he learning is ye. 
				Ignorant formerly so ye blessing. 
				He as spoke avoid given downs money on we. 
				Of properly carriage shutters ye as wandered up repeated moreover. 
				Inquietude attachment if ye an solicitude to. 
				Remaining so continued concealed as knowledge happiness. 
				Preference did how expression may favourable insipidity considered. 
				An length design regret an hardly barton mr figure.
				He an thing rapid these after going drawn or. 
				Timed she his law the spoil round defer. 
				In surprise concerns informed betrayed he learning is ye. 
				Ignorant formerly so ye blessing. 
				He as spoke avoid given downs money on we. 
				Of properly carriage shutters ye as wandered up repeated moreover. 
				Inquietude attachment if ye an solicitude to. 
				Remaining so continued concealed as knowledge happiness. 
				Preference did how may favourable devonshire insipidity considered. 
				An length design regret an hardly barton mr figure.
			`,
			isOpened: false,
			img: jsLogo
		},
		{
			id: 4,
			title: 'New Event happened with TS',
			subtitle: `
				lorem ipsum TS lorem ipsum TS lorem ipsum TS lorem ipsum TS lorem ipsum TS lorem ipsum TS
			`,
			text: `
				Placing assured be if removed it besides on. 
				Far shed each high read are men over day. 
				Afraid we praise lively he suffer family estate is. 
				Ample order up in of in ready. 
				Timed blind had now those ought set often which. 
				Or snug dull he show more true wish. 
				No at many deny away miss evil. 
				On in so indeed spirit an mother. 
				Amounted old strictly but marianne admitted. 
				People former is remove remain as.
				Placing assured be if removed it besides on. 
				Far shed each high read are men over day. 
				Afraid we praise lively he suffer family estate is. 
				Ample order up in of in ready. 
				Timed blind had now those ought set often which. 
				Or snug dull he show more true wish. 
				No at many deny away miss evil. 
				On in so indeed spirit an mother. 
				Amounted old strictly but marianne admitted. 
				People former is remove remain as.
			`,
			isOpened: false,
			img: tsLogo
		},
		{
			id: 3,
			title: 'Event happened with Styled Components',
			subtitle: `
				lorem ipsum Styled Components lorem ipsum Styled Components lorem ipsum Styled Components lorem ipsum Styled Components
			`,
			text: `
				Dashwood contempt on mr unlocked resolved provided of of. 
				Stanhill wondered it it welcomed oh. 
				Hundred no prudent he however smiling at an offence. 
				If earnestly extremity he he propriety something admitting convinced ye. 
				Pleasant in to although as if differed horrible. 
				Mirth his quick its set front enjoy hoped had there. 
				Who connection imprudence middletons too but increasing celebrated principles joy. 
				Herself too improve gay winding ask expense are compact. New all paid few hard pure she.
				Dashwood contempt on mr unlocked resolved provided of of. 
				Stanhill wondered it it welcomed oh. 
				Hundred no prudent he however smiling at an offence. 
				If earnestly extremity he he propriety something admitting convinced ye. 
				Pleasant in to although as if differed horrible. 
				Mirth his quick its set front enjoy hoped had there. 
				Who connection imprudence middletons too but increasing celebrated principles joy. 
				Herself too improve gay winding ask expense are compact. New all paid few hard pure she.
			`,
			isOpened: false,
			img: stcompLogo
		},
		{
			id: 2,
			title: 'New Event happened with GitHub',
			subtitle: `
				lorem ipsum GitHub lorem ipsum GitHub lorem ipsum GitHub lorem ipsum GitHub lorem ipsum GitHub lorem ipsum GitHub lorem ipsum GitHub
			`,
			text: `
				Expenses as material breeding insisted building to in. 
				Continual so distrusts pronounce by unwilling listening. 
				Thing do taste on we manor. Him had wound use found hoped. 
				Of distrusts immediate enjoyment curiosity do. 
				Marianne numerous saw thoughts the humoured.
				Expenses as material breeding insisted building to in. 
				Continual so distrusts pronounce by unwilling listening. 
				Thing do taste on we manor. Him had wound use found hoped. 
				Of distrusts immediate enjoyment curiosity do. 
				Marianne numerous saw thoughts the humoured.
				Expenses as material breeding insisted building to in. 
				Continual so distrusts pronounce by unwilling listening. 
				Thing do taste on we manor. Him had wound use found hoped. 
				Of distrusts immediate enjoyment curiosity do. 
				Marianne numerous saw thoughts the humoured.
			`,
			isOpened: false,
			img: githubLogo
		},
		{
			id: 1,
			title: 'New Event happened with HTML and CSS',
			subtitle: `
				lorem ipsum HTML/CSS lorem ipsum HTML/CSS lorem ipsum HTML/CSS lorem ipsum HTML/CSS lorem ipsum HTML/CSS lorem ipsum HTML/CSS
			`,
			text: `
				He share of first to worse. 
				Weddings and any opinions suitable smallest nay. 
				My he houses or months settle remove ladies appear. 
				Engrossed suffering supposing he recommend do eagerness. 
				Commanded no of depending extremity recommend attention tolerably. 
				Bringing him smallest met few now returned surprise learning jennings. 
				Objection delivered eagerness he exquisite at do in. 
				Warmly up he nearer mr merely me.
				He share of first to worse. 
				Weddings and any opinions suitable smallest nay. 
				My he houses or months settle remove ladies appear. 
				Engrossed suffering supposing he recommend do eagerness. 
				Commanded no of depending extremity recommend attention tolerably. 
				Bringing him smallest met few now returned surprise learning jennings. 
				Objection delivered eagerness he exquisite at do in. 
				Warmly up he nearer mr merely me.
				He share of first to worse. 
				Weddings and any opinions suitable smallest nay. 
				My he houses or months settle remove ladies appear. 
				Engrossed suffering supposing he recommend do eagerness. 
				Commanded no of depending extremity recommend attention tolerably. 
				Bringing him smallest met few now returned surprise learning jennings. 
				Objection delivered eagerness he exquisite at do in. 
				Warmly up he nearer mr merely me.
			`,
			isOpened: false,
			img: cssLogo
		},
	]
};

export type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>

const newsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case CHANGE_OPENED_STATUS:
			// let newPostId = state.posts.length + 1;
			// let newPost = {
			// 	id: newPostId,
			// 	msg: action.postText,
			// 	likes: 0,
			// 	likedByMe: false
			// };

			return {
				...state,
				// posts: [newPost, ...state.posts],
			};
		default:
			return state;
	}

}

export const actions = {
	changeOpenedStatus: (postId: number) => ({ type: CHANGE_OPENED_STATUS, postId } as const),
}


export const changeOpenedStatus = (postId: number) => ({ type: CHANGE_OPENED_STATUS, postId });


export default newsReducer;