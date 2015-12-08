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
				<ul className="row media-list">
					{this.state.users.map(function(user){
						return <li className="media col-xs-12" key={ user._id } onClick={this.selectUser.bind(this, user)}>
							<Link to={`/users/${user._id}`} >
								<div className="media-left">
										<img src={user.picture_small} />
								</div>
								<div className="media-body">
									<h4 className="media-heading">{user.name}</h4>
								</div>
							</Link>
						</li>
					}.bind(this))}
			 	</ul>
			)
		}
		return <li>Loading Users...</li>
	}
});

export default Users;
