import React from 'react';

let About = React.createClass({
	getInitialState() {
		return {
			readme: this.context.store.getState().readme
		}
	},
	handleNewState() {
		this.setState({ 'readme': this.context.store.getState().readme });
	},
	componentDidMount() {
		var { store } = this.context;
		store.subscribe(this.handleNewState);
	},
	render() {
		if (this.state.readme) {
			return (
				<div className="col-xs-12">
					<div dangerouslySetInnerHTML={{__html: this.state.readme}} />
				</div>
			)
		}
		return <p>Loading About...</p>;
	}
});

About.contextTypes = {
	store: React.PropTypes.object
}

export default About;