import React from 'react';
import classes from './Dialogs.module.css';
// import SashaMessages from './Messages/SashaMessages';
// import LeraMessages from './Messages/LeraMessages';
// import NastyaMessages from './Messages/NastyaMessages';
// import LenaMessages from './Messages/LenaMessages';
// import KristinaMessages from './Messages/KristinaMessages';
// import TanyaMessages from './Messages/TanyaMessages';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';





const Dialogs = (props) => {

	const DialogItem = (props) => {
		let path = `/dialogs/${props.id}`;

		return (
			<div className={classes.dialog}>
				<NavLink to={path} activeClassName={classes.active}>
					{props.name}
				</NavLink>
			</div>
		)
	}

	let dialogsElements = props.dialogs
		.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)



	let MessageItem = (props) => {
		let path = `/dialogs/${props.path}`;
		let component = () => props.component;

		return (
			<Route path={path} render={component} />
		)
	}


	let messagesElements = props.dialogs
		.map(dialog => <MessageItem path={dialog.id} component={dialog.msgs} />)



	return (
		<div className={classes.commonWrap}>
			<div className={classes.dialogsWrap}>
				<ul className={classes.dialogs}>
					{dialogsElements}
				</ul>
			</div>
			<div className={classes.messagesWrap}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs;