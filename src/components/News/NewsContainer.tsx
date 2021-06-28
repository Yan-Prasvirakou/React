import React from 'react';
import { changeOpenedStatus } from '../../redux/news-reducer';
import { actions } from '../../redux/news-reducer';
import News from './News';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
	return {
		newsBlock: state.NewsPage
	}
}


export default connect(mapStateToProps, { changeOpenedStatus: actions.changeOpenedStatus })(News);
// импортировать черех экшенс или просто как changeOpenedStatus?

