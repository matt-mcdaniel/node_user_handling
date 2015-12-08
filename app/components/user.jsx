import React from 'react';
import userEvent from '../event.js';

let user = {};

userEvent.on('userSelect', function(x) {
	user = x;
});

const User = React.createClass({
	render() {
		return <div className="col-xs-12">
			<h1>{user.name}</h1>
			<p>{user.email}</p>
			<div>{user.about}</div>
		</div>;
	}
});

export default User;
