import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';
import ReactStormpath, { Router, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

ReactStormpath.init();

ReactDOM.render(
  <Router history={createHashHistory({ queryKey: false })}>
	 
		  	<Route path='/' component={MasterPage}>
		  		<IndexRoute component={IndexPage} />
		  		<LoginRoute path='/login' component={LoginPage} />
		  		<Route path='/register' component={RegistrationPage} />
		  		<AuthenticatedRoute path='/profile' component={ProfilePage} />
		  		<LogoutRoute path='/logout' />
		  	</Route>
	 
  </Router>,
  document.getElementById('app-container')
);