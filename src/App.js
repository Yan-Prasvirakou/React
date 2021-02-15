import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className='wrapper'>

				<Header />
				<Navbar />

				<div className='content-wrapper'>
					<Route path='/profile' render={ () => <Profile/>}/>	
					<Route path='/dialogs' render={ () => <Dialogs/>}/>
					<Route path='/news' render={ () => <News/>}/>
					<Route path='/music' render={ () => <Music/>}/>
					<Route path='/settings' render={ () => <Settings/>}/>
				</div>
				
			</div>
		</BrowserRouter>
	);
}


export default App;
