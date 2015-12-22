import React from 'react';

const User = React.createClass({
	getInitialState() {
		return {
			value: null,
			activeRowIndex: null,
		}
	},
	edit(e) {
		// Set Active Row Styles
		console.log('edit: ', e);
		// this.setState({
		// 	value: val,
		// 	activeRowIndex: i
		// });
	},
	handleChange(e) {
		this.setState({ value: e.target.value });
	},
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th className="table-header">Field</th>
						<th className="table-header">Value</th>
					</tr>
				</thead>
				<tbody onClick={this.edit}>
					{Object.keys(user)
						.filter(function(v) {
							return typeof user[v] === 'string';
						})
						.map(function(key, i) {
							var val = user[key];
							var active = this.state.activeRowIndex === i;
							return (
								<tr key={i} className={active ? 'table-row active' : 'table-row'}>
									<th className="table-header">{key}</th>
									<td className={active ? 'view hidden' : 'view'} id={'view_' + key} >{val}</td>
									<td className={active ? 'edit active' : 'edit'} id={'edit_' + key}>
										<input className="form-control" onChange={this.handleChange} type="text" value={this.state.value} />
									</td>
								</tr>
							)
						}, this)}
				</tbody>
			</table>
		)
	}
});

export default User;
