import React from 'react';
import { sendMessageAC, updateNewMsgTextAC, setCurrentDialogAC } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage.dialogs,
		newMessageBody: state.dialogsPage.newMessageBody,
		currentDialog: state.dialogsPage.currentDialog,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMsg: () => {
			dispatch(sendMessageAC())
		},
		onMsgChange: (body) => {
			let msg = updateNewMsgTextAC(body);
			dispatch(msg)
		},
		setCurDlg: (dialog) => {
			dispatch(setCurrentDialogAC(dialog))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;