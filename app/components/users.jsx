import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import userEvent from '../event.js';

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

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
				<div className="row">
					<ul className="media-list col-xs-12">
						{this.state.users.map(function(user){
							let date = user.registered
								.slice(0, 10)
								.split('-')
								.move(0, 2)
								.join('-');
							return <li className="media col-xs-12" key={ user._id } onClick={this.selectUser.bind(this, user)}>
									<div className="media-left">
											<Link to={`/users/${user._id}`} ><img src={user.picture_small} /></Link>
									</div>
									<div className="media-body">
										<h4 className="media-heading">{user.name} <span className="email">{user.email}</span></h4>
										<p>Age: { user.age } , Company: { user.company }, Registered: { date }</p>
									</div>
							</li>
						}.bind(this))}
				 	</ul>
			 	</div>
			)
		}
		return <li>Loading Users...</li>
	}
});

export default Users;
