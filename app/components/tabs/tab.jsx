import React from 'react';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';

let Tab = React.createClass({
	render() {
		return (
			<li role="presentation" key={this.props.key}>
				<Link to={this.props.url}>
					{this.props.name}
				</Link>
			</li>
		)
	}
});

export default Tab;