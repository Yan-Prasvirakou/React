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

// залить на тигхаб коммит с добавленный стейт
// добавить в навбар блок с друзьями


const App = (props) => {

	return (
		<BrowserRouter>
			<div className='wrapper'>

				<Header />
				<Navbar />

				<div className='content-wrapper'>
					<Route path='/profile' render={ () => <Profile posts={props.state.profilePage.posts}/>}/>	
					<Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}/>}/>
					<Route path='/news' render={ () => <News/>}/>
					<Route path='/music' render={ () => <Music/>}/>
					<Route path='/settings' render={ () => <Settings/>}/>
				</div>
				
			</div>
		</BrowserRouter>
	);
}


export default App;
