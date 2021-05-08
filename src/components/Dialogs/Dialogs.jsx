import React from 'react';
import classes from './Dialogs.module.css';
import { Redirect, Route, NavLink} from 'react-router-dom';
import { Formik } from 'formik';


const Dialogs = (props) => {
	// debugger
	let dialogs = props.dialogsPage;
	let curDlg = props.currentDialog;


	let onSetCurDlg = (e) => {
		let dlg = e.target.textContent;
		props.setCurDlg(dlg);

		// 	let test = dialogs.filter(dialog => dialog.name == curDlg)[0]
		// // [0].msgs.map(msg => <Msg msgs={msg.text} style={msg.out}/>)
		// 	console.log(test.name
		
	}


	const DialogItem = (props) => {
		let path = `/dialogs/${props.id}`;

		return (
			<li className={classes.dialog}>
				<NavLink to={path} activeClassName={classes.active} onClick={onSetCurDlg}>
					<img src={props.ava} className={classes.dialog__img}/>
					{props.name}
				</NavLink>
			</li>
		)
	}

	// вместо currentDialog фильтровать по айдишнику переписки?
	// при обнолении страницы активкласс сохраняется, а диалоговое окно очищается
	// сохранять currentDialog в локал сторадж?

	let dialogsElements = dialogs
		.map((dialog, i) => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} key={dialog.id}/>)


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
			<div className={classes.messages}>
				{MsgElements}
			</div>
		)
	}

	let EmptyMessagesDiv = () => {
		return (
			<div className={classes.messages}>
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
			<Route path={path} render={component}	/>
		)
	}

	let messagesElements = !curDlg ? <EmptyMessagesDiv/>
		: dialogs.map((dialog) => <MessageItems path={dialog.id} component={<Messages />} key={dialog.id}/>)

	

	let newMsg = React.createRef();

	let onSendMsg = () => {
		let msgText = newMsg.current.value;

		if (curDlg) {
			props.sendMsg(msgText)
		}

		newMsg.current.value = '';
	}



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
					<form className={classes.writeMsg} onSubmit={handleSubmit} >
						
						<textarea
							name={'msgText'}
							id={'msgText'}
							placeholder={"write message text"}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.msgText}
							// className={touched.name && errors.name ? classes.test : null}
							className={classes.writeMsgText}
							ref={newMsg}
						/>
						<button type={'submit'} className={classes.writeMsgBtn}
							disabled={isSubmitting || JSON.stringify(values.msgText) == `""`}
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
					{dialogsElements}
				</ul>
			</div>
			<div className={classes.messagesWrap}>
				{messagesElements}
				<DialogForm/>
			</div>
		
		</div>
	)
}

export default Dialogs;