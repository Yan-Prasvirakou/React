import React from 'react';
import { clearCurrentDialogAC } from '../../redux/dialogs-reducer';
import { setCurrentPage } from '../../redux/users-reducer';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
	return {
		currentDialog: state.dialogsPage.currentDialog,
	}
}


export default connect(mapStateToProps, { clearCurrentDialogAC, setCurrentPage})(Navbar);

