import React from 'react';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';

const App = React.createClass({
	render() {
		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><Link to="/users">Users</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});

export default App;