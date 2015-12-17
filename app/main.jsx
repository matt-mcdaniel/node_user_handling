// Import Styles
import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';
import { Provider } from 'react-redux';

// Load required components
import App from './components/app/app.jsx';
import UserList from './components/userList/userList.jsx';
import UserDetail from './components/userDetail/userDetail.jsx';
import About from './components/about/about.jsx';
import store from './store.js';
import $ from 'jquery';

$.get('admin/users').done(function(result) {
	// Ajax call to get inital users from Express
	result['users'].forEach((u) => store.dispatch({ 'type': 'ADD_USER', 'user': u }));
});

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Route path="/" component={App}>
					<IndexRoute component={UserList} />
					<Route path="users" component={UserList} />
					<Route path="users/:id" component={UserDetail} />
					<Route path="about" component={About} />
				</Route>
			</Router>
		</Provider>,
		document.getElementById('app')
	)
}

// store.subscribe(render);
render();
