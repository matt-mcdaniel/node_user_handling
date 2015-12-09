import React from 'react';
import userEvent from '../event.js';

let user = {};

userEvent.on('userSelect', function(x) {
	user = x;
});

const User = React.createClass({
	render() {
		return (
			<div className="col-xs-12">
				<h3 className="user-name">{ user.name }</h3>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Field</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(user).map(function(key) {
							if (typeof user[key] === 'string') {
								return <tr key={ user[key] }>
									<th>{key}</th>
									<td>{user[key]}</td>
								</tr>
							}
						}.bind(this))}
					</tbody>
				</table>
			</div>
		)
	}
});

export default User;
