import React from 'react';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';

const App = React.createClass({
	getInitialState() {
		return { active: 'users' };
	},
	changeActive() {
		console.log(arguments);
		this.setState({ active: this.state.active === 'users' ? 'about' : 'users' });
	},
	render() {
		let userClass = this.state.active === 'users' ? 'active' : '';
		let aboutClass = this.state.active === 'about' ? 'active' : '';
		return (
				<div className="row">
					<div className="col-md-offset-2 col-md-8">
						<ul className="nav nav-pills nav-justified">
							<li role="presentation" className={userClass} onClick={this.changeActive}>
								<Link to="/users">Users</Link>
							</li>
							<li role="presentation" className={aboutClass} onClick={this.changeActive}>
								<Link to="/about">About</Link>
							</li>
						</ul>
						{this.props.children}
					</div>
				</div>
		)
	}
});

export default App;