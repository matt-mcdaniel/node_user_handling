import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import userEvent from '../event.js';

const Users = React.createClass({
	getInitialState() {
		return {
			users: null
		}
	},
	componentDidMount() {
		$.get('admin/users').done(function(result) {
			this.setState({ users: result['users'] });
		}.bind(this));
	},
	selectUser(user) {
		userEvent.emit('userSelect', user);
	},
	render() {
		if (this.state.users) {
			return (
				<ul>
					{this.state.users.map(function(user){
						return <li className="user" key={user._id } onClick={this.selectUser.bind(this, user)}>
							<Link to={`/users/${user._id}`} >
								{user.name}
							</Link>
						</li>;
					}.bind(this))}
			 	</ul>
			)
		}
		return <li>Loading Users...</li>
	}
});

export default Users;
