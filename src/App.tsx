import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import {UsersPage} from './components/Users/UsersContainer';
import NewsContainer from './components/News/NewsContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import { AppStateType } from './redux/redux-store';
// import 'antd/dist/antd.css'
// import {Button} from 'antd'

// стилизовать форму поиска юзеров через ant design
// пофиксить ссылки в диалогах через usehistory

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

type AppMapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
	initializeApp: () => void
}

class App extends React.Component<AppMapPropsType & DispatchPropsType> {
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
							<Route path='/news' render={ () => <NewsContainer/>}/>
							<Route path='/music' render={ () => <Music/>}/>
							<Route path='/settings' render={() => <Settings />} />
							<Route path='/users' render={() => <UsersPage pageTitle={'Самураи'}/>} />
						<Route path='/login' render={() => <Login />} />
							<Route path='/' exact render={() => <Redirect to={'/profile'} />} />
							<Route path='/React' exact render={() => <Redirect to={'/profile'}/>} />
						<Route path='*' render={() =>
							<div className='notFound'>
								<p>404 NOT FOUND</p>
								{/* <Button>OK</Button> */}
							</div>
						} />
							<Route path='/' render={() => <Redirect to={'/profile'} />} />
							{/* <Redirect from="/" to="/profile"/> */}
							{/* {FullScreenEvents} */}
						</Switch>
						
					</div>
					
				</div>
		);
	}

}

const mapStateToProps = (state: AppStateType) => ({
	initialized: state.app.initialized
})


export default compose<React.ComponentType>(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

	
