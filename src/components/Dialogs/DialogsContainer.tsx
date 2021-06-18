import React from 'react';
import { sendMessageAC, setCurrentDialogAC } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType, InferActionsTypes } from '../../redux/redux-store';
import { Dispatch } from 'redux';
// import redux from 'redux'


let mapStateToProps = (state: AppStateType) => {
	
	return {
		dialogsPage: state.dialogsPage.dialogs,
		currentDialog: state.dialogsPage.currentDialog,
	}
}

// type MapDispatchToPropsType = {
// 	sendMsg: (msgText: string) => void
// 	setCurDlg: (dialog: string) => void
// }

// export interface Dispatch<A extends Action = AnyAction> {
// 	<T extends A>(action: T): T
// }

// let mapDispatchToProps = (dispatch: Dispatch<InferActionsTypes<typeof actions>>) => {
// 	return {
// 		sendMsg: (msgText: string) => {
// 			dispatch(sendMessageAC(msgText))
// 		},
// 		setCurDlg: (dialog: string) => {
// 			dispatch(setCurrentDialogAC(dialog))
// 		},
// 	}
// }

export default compose(
	connect(mapStateToProps, {
		sendMsg: sendMessageAC,
		setCurDlg: setCurrentDialogAC
	}),
	withAuthRedirect
)(Dialogs) as React.ComponentType

