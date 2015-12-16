// Import Styles
import './main.css';

import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';

// Load required components
import App from './components/app/app.jsx';
import UserList from './components/userList/userList.jsx';
import UserDetail from './components/userDetail/userDetail.jsx';
import About from './components/about/about.jsx';

render(
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={UserList} />
			<Route path="users" component={UserList}/>
			<Route path="users/:id" component={UserDetail} />
			<Route path="about" component={About} />
		</Route>
	</Router>,
	document.getElementById('app')
)

