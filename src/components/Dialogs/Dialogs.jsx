import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { sendMessageActionCreator, updateNewMsgTextActionCreator } from '../../redux/store';



const Dialogs = (props) => {

	let newMsgBody = props.dialogsPage.newMessageBody;
	let dialogs = props.dialogsPage.dialogs;

	const DialogItem = (props) => {
		let path = `/dialogs/${props.id}`;

		return (
			<li className={classes.dialog}>
				<NavLink to={path} activeClassName={classes.active}>
					<img src={props.ava} className={classes.dialog__img}/>
					{props.name}
				</NavLink>
			</li>
		)
	}

	let dialogsElements = dialogs
		.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava}/>)


	let Msg = (props) => {
		let style = props.style ? classes.outgoing : classes.incoming;
		// let name

		return (
			<div className={style}>{props.msgs}</div>
		)
	}

	// создать общую переменную из props???

	
	let MsgElements = dialogs
		// .filter(dialog => dialog.name == 'Kristina')
		.map(dialog => dialog.msgs.map(msg => <Msg msgs={msg.text} style={msg.out}/>))
	//  я пока не знаю как отфильтровать

	let Messages = (props) => {
		return (
				<div className={classes.messages}>
					{MsgElements}
				</div>
		)
	}


	let MessageItems = (props) => {
		let path = `/dialogs/${props.path}`;
		let component = () => props.component;

		return (
			<Route path={path} render={component}	/>
		)
	}

	let messagesElements = dialogs
		.map(dialog => <MessageItems path={dialog.id} component={<Messages />} />)


	
	let onMsgChange = (e) => {
		let text = e.target.value;
		let action = updateNewMsgTextActionCreator(text);
		props.dispatch(action)
	}
	

	let sendMsg = () => {
		props.dispatch(sendMessageActionCreator());
	}


	return (
		<div className={classes.commonWrap}>
			<div className={classes.dialogsWrap}>
				<ul className={classes.dialogs}>
					{dialogsElements}
				</ul>
			</div>
			<div className={classes.messagesWrap}>
				{messagesElements}
				<div className={classes.writeMsg}>
					<textarea className={classes.writeMsgText} onChange={onMsgChange} value={newMsgBody}>

					</textarea>
					<button className={classes.writeMsgBtn} onClick={sendMsg}>Send</button>
				</div>
			</div>
		
		</div>
	)
}

export default Dialogs;