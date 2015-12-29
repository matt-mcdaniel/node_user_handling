import React from 'react';
import $ from 'jquery';

let Readme;
// socket.on('readme', (data) => {
// 	Readme = data;
// });
// $.get('/about', (data) => {
// 	console.log(data);
// });

console.log('about.jsx');
let About = React.createClass({
	render() {
		if (Readme) {
			return (
				<div className="col-xs-12">
					<div dangerouslySetInnerHTML={{__html: Readme}} />
				</div>
			)
		}
		return <p>Loading About...</p>;
	}
});

export default About;