import React, { useState, useEffect } from 'react';
import classes from './Dialogs.module.css';
import { Redirect, Route, NavLink } from 'react-router-dom';
import { Formik } from 'formik';


const Dialogs = (props) => {

	let dialogs = props.dialogsPage;
	let curDlg = props.currentDialog;
	let curDlgBlock = React.useRef();
	let sendMsgBtn = React.createRef();
	let newMsgField = React.useRef();
	let enterKeyDown = false;

	let onSendMsg = () => {
		let msgText = newMsgField.current.value;
		props.sendMsg(msgText);

		newMsgField.current.value = '';
		newMsgField.current.focus();
	}

	let onEnterKeyDown = (e) => {
		if (e.code == 'Enter' && sendMsgBtn.current
			&& !sendMsgBtn.current.disabled && !enterKeyDown
			&& document.activeElement == newMsgField.current) {
				e.preventDefault();
				enterKeyDown = true;
				setTimeout(() => {
					onSendMsg();
				}, 60);	
			// onSendMsg();
		}
	}

	let onEnterKeyUp = (e) => {
		if (e.code == 'Enter' && sendMsgBtn.current && !sendMsgBtn.current.disabled
			&& enterKeyDown && document.activeElement == newMsgField.current) {
			enterKeyDown = false;
		}
	}


	useEffect(() => {
		document.addEventListener('keydown', onEnterKeyDown)
	});

	useEffect(() => {
		document.addEventListener('keyup', onEnterKeyUp)
	});

	useEffect(() => {
		if (curDlg) {
			curDlgBlock.current.scrollTop = curDlgBlock.current.scrollHeight;
		}
	})


	let onSetCurDlg = (e) => {
		let dlg = e.currentTarget.textContent;
		props.setCurDlg(dlg);
	}


	const DialogItem = (props) => {
		let path = `/dialogs/${props.id}`;

		return (
			<li className={classes.dialog} >
				<NavLink to={path} activeClassName={classes.active} onClick={onSetCurDlg}>
					<img src={props.ava} className={classes.dialog__img} />
					{props.name}
				</NavLink>
			</li>
		)
	}


	let dialogsBlock = dialogs
		.map((dialog, i) => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} key={dialog.id} />)


	let Msg = (props) => {
		let style = props.style ? classes.outgoing : classes.incoming;

		return (
			<div className={style}>{props.msgs}</div>
		)
	}


	let MsgElements = curDlg ?
		dialogs
			.filter(dialog => dialog.name == curDlg)[0].msgs
			.map(msg => <Msg msgs={msg.text} style={msg.out} key={msg.id} />)
		: null;


	let Messages = () => {
		return (
			<div className={classes.messages} ref={curDlgBlock}>
				{MsgElements}
			</div>
		)
	}

	let EmptyMessagesDiv = () => {
		return (
			<div className={classes.fullHeightMessages}>
				<div className={classes.noDlg}>
					<p>Диалог не выбран</p>
				</div>
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

	let messagesBlock = !curDlg ? <EmptyMessagesDiv />
		: dialogs.map((dialog) => <MessageItems path={dialog.id} component={<Messages />} key={dialog.id} />)


	const DialogForm = (props) => {
		return (
			<Formik
				initialValues={{ msgText: '' }}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
				}) => (
					<form className={classes.writeMsg}>

						<textarea
							name={'msgText'}
							id={'msgText'}
							placeholder={"write message text"}
							onChange={handleChange}
							onBlur={handleBlur}
							value={(values.msgText).startsWith('\n') ? '' : values.msgText}
							// className={touched.name && errors.name ? classes.test : null}
							className={classes.writeMsgText}
							ref={newMsgField}
							autoFocus
						/>
						<button type={'submit'} className={classes.writeMsgBtn} ref={sendMsgBtn}
							disabled={isSubmitting || values.msgText == '' || !(values.msgText).match(/\S/g)}
							onClick={onSendMsg}
						>
							Send
						</button>
					</form>
				)}
			</Formik>
		)
	}


	return (
		<div className={classes.commonWrap}>
			<div className={classes.dialogsWrap}>
				<ul className={classes.dialogs}>
					{dialogsBlock}
				</ul>
			</div>
			<div className={classes.messagesWrap}>
				{messagesBlock}
				{curDlg && <DialogForm />}
			</div>
		</div>
	)
}

export default Dialogs;