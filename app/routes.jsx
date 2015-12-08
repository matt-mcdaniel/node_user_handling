import React from 'react';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';

import App from './components/app.jsx';

import Users from './components/users.jsx';
import User from './components/user.jsx';
import About from './components/about.jsx';

export default (
	<Router>
		<Route path="/" component={App} >
			<IndexRoute component={Users} />
			<Route path="users" component={Users} />
			<Route path="users/:id" component={User} />
			<Route path="about" component={About} />
		</Route>
	</Router>
)
