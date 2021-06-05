import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) return <Preloader/>

		return (
				<div className='wrapper'>

					<HeaderContainer/>
					<NavbarContainer/>

					<div className='content-wrapper'>
						<Switch>
							<Route path='/profile/:userId?' render={() => {
								return <React.Suspense fallback={<Preloader/>}> 
									<ProfileContainer/>
								</React.Suspense>
							}}/>
							<Route path='/dialogs' render={() => {
								return <React.Suspense fallback={<Preloader/>}> 
									<DialogsContainer/>
								</React.Suspense>
							}}/>
							<Route path='/news' render={ () => <News/>}/>
							<Route path='/music' render={ () => <Music/>}/>
							<Route path='/settings' render={() => <Settings />} />
							<Route path='/users' render={() => <UsersContainer pageTitle={'Самураи'}/>} />
							<Route path='/login' render={() => <Login />} />
							<Route path='/' exact render={() => <Redirect to={'/profile'} />} />
							<Route path='/React' exact render={() => <Redirect to={'/profile'}/>} />
							<Route path='*' render={() => <div className='notFound'><p>404 NOT FOUND</p></div>} />
							<Route path='/' render={() => <Redirect to={'/profile'} />} />
							{/* <Redirect from="/" to="/profile"/> */}
						</Switch>
						
					</div>
					
				</div>
		);
	}

}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})


export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

	
