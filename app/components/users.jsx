import React from 'react';
import $ from 'jquery';

const Users = React.createClass({
	getInitialState() {
		return {
			users: null
		}
	},
	componentDidMount() {
		$.get(this.props.source).done(function(result) {
			this.setState({ users: result['users'] });
		}.bind(this));
	},
	render() {
		console.log(this.state.users);
		if (this.state.users) {
			return (
				<ul>
					{this.state.users.map(function(user){
						return <li className="user" key={'user' + user._id }>
							<a href={user._id}>
								{user.name}
							</a>
						</li>;
					})}
			 	</ul>
			)
		}
		return <li>Loading...</li>
	}
});

export default Users;
