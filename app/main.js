import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Load required components
import App from './components/app/app.jsx';
import Users from './components/userPanel/users.jsx';
import About from './components/about/about.jsx';
import User from './components/userDetail/user.jsx';

const store = {};

// Import Styles
import './main.css';

const routes = <Route path="/" component={App}>
	<IndexRoute component={Users} />
	<Route path="users" component={Users} />
	<Route path="users/:id" component={User} />
	<Route path="about" component={About} />
</Route>;


// get global routes
render( <Router>{ routes }</Router>,
	document.getElementById('app')
);
