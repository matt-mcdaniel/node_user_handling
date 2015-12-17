import React from 'react';
import { Link } from 'react-router';

const UserListItem = React.createClass({
	formatCompany(str) {
		return str.toLowerCase()
			.replace( /\b\w/g, function (m) { return m.toUpperCase(); });
	},
	formatDate(str) {
		return str.slice(0, 10)
			.split('-')
			.move(0, 2)
			.join('-');
	},
	formatTags(arr) {
		return arr.slice(0, 2)
			.map(function(tag) {
				return <p className="tags label label-default" key={ tag }> { tag } </p>;
			});
	},
	handleUserSelect(user) {
		this.props.handleUserSelect(user);
	},
	render() {
		let user = this.props.user;
		let registered = this.formatDate(user.registered);
		let company = this.formatCompany(user.company);
		let tags = this.formatTags(user.tags);
		return (
			<li className="media col-xs-12" key={ user._id } onClick={this.handleUserSelect.bind(this, user)}>
				<Link  className="user-panel" to={`/users/${user._id}`} >
					<div className="media-left">
						<img src={user.picture_small} />
					</div>
					<div className="media-body">
						<h4 className="media-heading">{user.name} <span className="email">{user.email}</span></h4>
						<ul className="user-properties-list">
							<li><span className="label">Registered</span> { registered }</li>
							<li><span className="label">Balance</span> { user.balance }</li>
							<li><span className="label">Tags</span>{ tags.map((tag) => tag) }</li>
						</ul>
					</div>
				</Link>
			</li>
		)
	}
});

export default UserListItem;