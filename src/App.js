import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';


class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) return <Preloader/>

		return (
			<BrowserRouter>
				<div className='wrapper'>

					<HeaderContainer/>
					<NavbarContainer />

					<div className='content-wrapper'>
						< Route path = '/profile/:userId?'
						render = {() => <ProfileContainer/>}/>
						<Route path='/dialogs' render={() => <DialogsContainer/>}/>
						<Route path='/news' render={ () => <News/>}/>
						<Route path='/music' render={ () => <Music/>}/>
						<Route path='/settings' render={() => <Settings />} />
						<Route path='/users' render={() => <UsersContainer />} />
						<Route path='/login' render={() => <Login/>} />
					</div>
					
				</div>
			</BrowserRouter>
		);
	}

}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})


export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

	
