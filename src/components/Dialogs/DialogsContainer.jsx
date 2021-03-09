import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import dialogsReducer, { sendMessageActionCreator, updateNewMsgTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
	let state = props.store.getState();

	let onMsgChange = (text) => {
		let action = updateNewMsgTextActionCreator(text);
		props.store.dispatch(action);
	}


	let sendMsg = () => {
		props.store.dispatch(sendMessageActionCreator());
	}


	return (
		<Dialogs
			onMsgChange={onMsgChange}
			sendMsg={sendMsg}
			dialogs={state.dialogsPage.dialogs}
			newMessageBody={state.dialogsPage.newMessageBody}
		/>
	)
}

export default DialogsContainer;