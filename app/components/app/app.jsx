import React from 'react';

import TabList from '../../components/tabs/tabList.js';
import Tabs from '../../components/tabs/tabs.jsx';

const App = React.createClass({
	getInitialState() {
		var pathname = this.props.location.pathname;
		var locations = TabList.map(function(tab) {
			return tab.url;
		});
		var currentTab = locations.indexOf(pathname) > -1 ? pathname : '/users';
		//console.log(pathname, locations, currentTab);
		return {
			currentTab: currentTab
		}
	},
	changeTab(tab) {
		this.setState({ currentTab: tab.url });
	},
	render() {
		return (
			<div className="app-container">
				<Tabs
					currentTab={this.state.currentTab}
					changeTab={this.changeTab}
					tabList={TabList}
				/>
				<div className="container">
					<div className="row">
						<div className="col-md-offset-2 col-md-8">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default App;