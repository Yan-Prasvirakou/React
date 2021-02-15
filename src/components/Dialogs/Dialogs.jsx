import React from 'react';
import classes from './Dialogs.module.css';
import SashaMessages from './Messages/SashaMessages';
import LeraMessages from './Messages/LeraMessages';
import NastyaMessages from './Messages/NastyaMessages';
import LenaMessages from './Messages/LenaMessages';
import KristinaMessages from './Messages/KristinaMessages';
import TanyaMessages from './Messages/TanyaMessages';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// такие массивы объектов и прочее подобное обычно приходит с сервака

let dialogs = [
	{ id: 1, name: 'Sasha', msgs: <SashaMessages/> },
	{ id: 2, name: 'Lera', msgs: <LeraMessages/> },
	{ id: 3, name: 'Nastya', msgs: <NastyaMessages/> },
	{ id: 4, name: 'Lena', msgs: <LenaMessages/> },
	{ id: 5, name: 'Kristina', msgs: <KristinaMessages/> },
	{ id: 6, name: 'Tanya', msgs: <TanyaMessages/> }
]

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

let dialogsElements = dialogs
	.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)



let MessageItem = (props) => {
	let path = `/dialogs/${props.path}`;
	let component = () => props.component;

	return (
		<Route path={path} render={component}/>
	)
}

// вынести логику для диалогов и сообщений в index.js

let messagesElements = dialogs
	.map(dialog => <MessageItem path={dialog.id} component={dialog.msgs}/>)


const Dialogs = () => {
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