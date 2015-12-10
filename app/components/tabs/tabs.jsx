import React from 'react';
import { IndexRoute, Redirect, Router, Route, Link } from 'react-router';

import Tab from './tab.jsx';

const Tabs = React.createClass({
	handleClick(tab) {
		this.props.changeTab(tab);
	},
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					{this.props.tabList.map(function(tab) {
						return (
							<Tab
								role="presentation"
								key={tab.id}
								url={tab.url}
								name={tab.name}
								handleClick={this.handleClick.bind(this, tab)}
								isCurrent={this.props.currentTab === tab.url}
							/>
						)
					}.bind(this))}
				</div>
			</nav>
		)
	}
});

export default Tabs;
