import React from 'react';
import $ from 'jquery';

let About = React.createClass({
	getInitialState() {
		return {
			readme: null
		}
	},
	componentDidMount() {
		$.get('admin/readme').done(function(result) {
			this.setState({ readme: result['readme'] });
		}.bind(this));
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

export default About;