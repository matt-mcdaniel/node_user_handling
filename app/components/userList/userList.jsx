import React from 'react';
import userEvent from '../../event.js';
import UserListItem from './userListItem.jsx';

// Helper chain function to reorder array items (reformatting dates)
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

/** React Component Lifecycle
Data changes are subscribed to by the store defined
in the component's this.context.store (the Component inherits
this context from the <Provider /> component). On data change,
componentDidMount fire off a state change, handled by handleNewState()
which resets the value of the component's state and triggers a
new render()
*/

const Users = React.createClass({
	getInitialState() {
		// set default state to be overwritten on data change
		return {
			users: this.context.store.getState(),
			selectedUser: null
		}
	},
	handleNewState() {
		// Set the new state
		this.setState({
			users: this.context.store.getState()
		})
	},
	componentDidMount() {
		var { store } = this.context;
		// Fire off event went data changes (on store.dispatch)
		store.subscribe(this.handleNewState);
	},
	handleUserSelect(user) {
		console.log(user);
	},
	render() {
		if (this.state.users) {
			return (
				<div className="row">
					<ul className="media-list col-xs-12">
						{this.state.users.map(function(user){
							return <UserListItem
								user={user}
								key={user._id}
								handleUserSelect={this.handleUserSelect}
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
