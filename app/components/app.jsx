import React from 'react';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';

const App = React.createClass({
	render() {
		return (
			<div className="row">
					<h1>App</h1>
					<ul className="nav nav-pills row">
						<li role="presentation" className="active" >
							<Link to="/users">Users</Link>
						</li>
						<li role="presentation" className="dropdown">
							<Link to="/about">About</Link>
						</li>
					</ul>
					{this.props.children}
			</div>
		)
	}
});

export default App;