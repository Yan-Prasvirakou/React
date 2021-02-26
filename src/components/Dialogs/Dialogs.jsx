import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';



const Dialogs = (props) => {

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

	let dialogsElements = props.dialogs
		.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava}/>)


	let Msg = (props) => {
		let style = props.style ? classes.outgoing : classes.incoming;
		// let name

		return (
			<div className={style}>{props.msgs}</div>
		)
	}

	// создать общую переменную из props???

	
	let MsgElements = props.dialogs
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
			<Route path={path} render={component} />
		)
	}

	let messagesElements = props.dialogs
		.map(dialog => <MessageItems path={dialog.id} component={<Messages />} />)


	let msgText = React.createRef();
	
	let sendMsg = () => {
		let text = msgText.current.value;
		alert(text);
	}

	return (
		<div className={classes.commonWrap}>
			<div className={classes.dialogsWrap}>
				<ul className={classes.dialogs}>
					{dialogsElements}
				</ul>
			</div>
			<div className={classes.messagesWrap}>
				{/* <div className={classes.messages}> */}
					{messagesElements}
				{/* </div>	 */}
				<div className={classes.writeMsg}>
					<textarea className={classes.writeMsgText} ref={msgText}></textarea>
					<button className={classes.writeMsgBtn} onClick={sendMsg}>Send</button>
				</div>
			</div>
		
		</div>
	)
}

export default Dialogs;