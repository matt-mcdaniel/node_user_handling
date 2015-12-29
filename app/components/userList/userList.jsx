import React from 'react';
import UserListItem from './userListItem.jsx';

// Helper chain function to reorder array items (reformatting dates)
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

/** React Component Lifecycle
Data changes are subscribed to by the store defined
in the component's this.context.store (the Component inherits
this context from the <Provider> component). On data change,
componentDidMount fire off a state change, handled by handleNewState()
which resets the value of the component's state and triggers a
new render()
*/

const Users = React.createClass({
	getInitialState() {
		// set default state to be overwritten on data change
		return { users: this.context.store.getState() }
	},
	componentDidMount() {
		this.context.store.dispatch({ 'type': 'GET_USERS' });
		console.log('getting state', this.context.store.getState());
	},
	render() {
		if (this.state.users) {
			return (
				<div className="row">
					<ul className="media-list col-xs-12">
						{this.state.users.map(function(user){
							return <UserListItem
								key={user._id}
								user={user}
							/>;
						}, this)}
				 	</ul>
			 	</div>
			)
		}
		return <li>Loading Users...</li>
	}
});

Users.contextTypes = {
	store: React.PropTypes.object
}

export default Users;
