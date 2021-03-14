import React from 'react';
import { sendMessageActionCreator, updateNewMsgTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage.dialogs,
		newMessageBody: state.dialogsPage.newMessageBody
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMsg: () => {
			dispatch(sendMessageActionCreator())
		},
		onMsgChange: (body) => {
			let msg = updateNewMsgTextActionCreator(body);
			dispatch(msg)
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;