var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

var ReactEngine = require('react-engine');
var engine = ReactEngine.server.create({});

app.engine('.jsx', engine);

console.log('Node Environment: ', process.env.NODE_ENV);

var isDev = process.env.NODE_ENV === 'development';
if (isDev) {
	app.use('/', express.static(__dirname + '/build'));
} else {
	app.use('/', express.static(__dirname + '/dist'));
}

app.listen(port, function() {
	console.log('App listening on port', port);
});

// Bootstrap Routes
require('./server/config/routes')(app);


