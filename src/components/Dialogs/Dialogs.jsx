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

const Dialogs = () => {
	return (
		<div className={classes.commonWrap}>
			<div className={classes.dialogsWrap}>
				<ul  className={classes.dialogs}>
					<li className={classes.dialog}>
						<NavLink to='/dialogs/sasha' activeClassName={classes.active}>
							Sasha
						</NavLink>
					</li>
					<li className={classes.dialog}>
						<NavLink to='/dialogs/lera' activeClassName={classes.active}>
							Lera
						</NavLink>
					</li>
					<li className={classes.dialog}>
						<NavLink to='/dialogs/nastya' activeClassName={classes.active}>
							Nastya
						</NavLink>
					</li>
					<li className={classes.dialog}>
						<NavLink to='/dialogs/lena' activeClassName={classes.active}>
							Lena
						</NavLink>
					</li>
					<li className={classes.dialog}>
						<NavLink to='/dialogs/kristina' activeClassName={classes.active}>
							Kristina
						</NavLink>
					</li>
					<li className={classes.dialog}>
						<NavLink to='/dialogs/tanya' activeClassName={classes.active}>
							Tanya
						</NavLink>
					</li>
				</ul>
			</div>
			<div className={classes.messagesWrap}>
				<Route path='/dialogs/sasha' component={SashaMessages}/>
				<Route path='/dialogs/lera' component={LeraMessages}/>
				<Route path='/dialogs/nastya' component={NastyaMessages}/>
				<Route path='/dialogs/lena' component={LenaMessages}/>
				<Route path='/dialogs/kristina' component={KristinaMessages}/>
				<Route path='/dialogs/tanya' component={TanyaMessages}/>
			</div>
		</div>
	)
}

export default Dialogs;