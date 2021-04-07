import React from 'react';
import { sendMessageAC, updateNewMsgTextAC, setCurrentDialogAC } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage.dialogs,
		currentDialog: state.dialogsPage.currentDialog,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMsg: (msgText) => {
			dispatch(sendMessageAC(msgText))
		},
		setCurDlg: (dialog) => {
			dispatch(setCurrentDialogAC(dialog))
		},
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);

