import React from 'react';
import { sendMessageAC, setCurrentDialogAC } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
	
	return {
		dialogsPage: state.dialogsPage.dialogs,
		currentDialog: state.dialogsPage.currentDialog,
	}
}

let mapDispatchToProps = (dispatch: any) => {
	return {
		sendMsg: (msgText: string) => {
			dispatch(sendMessageAC(msgText))
		},
		setCurDlg: (dialog: string) => {
			dispatch(setCurrentDialogAC(dialog))
		},
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);

