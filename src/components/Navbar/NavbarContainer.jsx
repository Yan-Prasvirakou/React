import React from 'react';
import { clearCurrentDialogAC } from '../../redux/dialogs-reducer';
import Navbar from './Navbar';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return {
		currentDialog: state.dialogsPage.currentDialog,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		clearCurDlg: () => {
			dispatch(clearCurrentDialogAC())
		},
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

