import React from 'react';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';

const Tab = React.createClass({
	handleClick(e) {
		this.props.handleClick();
	},
	render() {
		return (
			<div role="presentation"
				 key={this.props.key}
				 className={this.props.isCurrent ? 'nav-item active' : 'nav-item'}
				 >
				<Link to={this.props.url} onClick={this.handleClick} >
					{this.props.name}
				</Link>
			</div>
		)
	}
});

export default Tab;