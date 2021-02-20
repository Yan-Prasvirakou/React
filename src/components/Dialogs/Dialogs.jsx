import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';



const Dialogs = (props) => {

	const DialogItem = (props) => {
		let path = `/dialogs/${props.id}`;
		// let src = ;

		return (
			<div className={classes.dialog}>
				<NavLink to={path} activeClassName={classes.active}>
					<img src={props.ava} className={classes.dialog__img}/>
					{props.name}
				</NavLink>
			</div>
		)
	}

	let dialogsElements = props.dialogs
		.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava}/>)



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