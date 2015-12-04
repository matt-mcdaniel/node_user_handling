var utils = require('./utils.js');
var component = require('./components/component.js');

console.log(component());
console.log(utils());

document.body.appendChild(component());
document.body.appendChild(utils());