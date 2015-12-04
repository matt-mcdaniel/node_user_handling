var React = require('react');

module.exports = function() {
	var component = document.createElement('div');

	component.innerHTML = 'component loaded';

	return component;
}
