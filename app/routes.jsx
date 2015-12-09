import React from 'react';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';

// Load required components
import Tabs from './components/tabs/tabs.jsx';
import Users from './components/userPanel/users.jsx';
import User from './components/userDetail/user.jsx';
import About from './components/about/about.jsx';

export default (
	<Router>
		<Route path="/" component={Tabs} >
			<IndexRoute component={Users} />
			<Route path="users" component={Users} />
			<Route path="users/:id" component={User} />
			<Route path="about" component={About} />
		</Route>
	</Router>
)
