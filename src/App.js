import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className='wrapper'>

				<Header />
				<Navbar />

				<div className='content-wrapper'>
					<Route path='/profile'
						render={() =>
							<Profile
								store={props.store}
							/>
						}
					/>

					<Route path='/dialogs'
						render={() =>
							<DialogsContainer store={props.store}/>
						}
					/>

					<Route path='/news' render={ () => <News/>}/>
					<Route path='/music' render={ () => <Music/>}/>
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/users' render={() => <UsersContainer store={ props.store}/>} />
				</div>
				
			</div>
		</BrowserRouter>
	);
}


export default App;
