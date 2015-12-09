import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import userEvent from '../../event.js';

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

							let company = user.company
								.toLowerCase()
								.replace( /\b\w/g, function (m) { return m.toUpperCase(); });

							return <li className="media col-xs-12" key={ user._id } onClick={this.selectUser.bind(this, user)}>
								<Link  className="user-panel" to={`/users/${user._id}`} >
									<div className="media-left">
										<img src={user.picture_small} />
									</div>
									<div className="media-body">
										<h4 className="media-heading">{user.name} <span className="email">{user.email}</span></h4>
										<ul className="user-properties-list">
											<li><span className="label">Company</span> { company }</li>
											<li><span className="label">Balance</span> { user.balance }</li>
											<li><span className="label">Registered</span> { date }</li>
											<li><span className="label">Tags</span> {
												user.tags
													.slice(0, 2)
													.map(function(tag) {
														return <p className="tags label label-default" key={ tag }> { tag } </p>;
													})

											}</li>
										</ul>
									</div>
								</Link>
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
