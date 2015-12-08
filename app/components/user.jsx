import React from 'react';
import userEvent from '../event.js';

let user = {};

userEvent.on('userSelect', function(x) {
	console.log(x);
	user = x;
});

const User = React.createClass({
	render() {
		return <div>
			<h1>{user.name}</h1>
			<p>{user.email}</p>
			<div>{user.about}</div>
		</div>;
	}
});

export default User;
