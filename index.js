var express = require('express');
var http = require('http');
var app = express();

var path = require('path');

var server = http.createServer(app);
var io = require('socket.io').listen(server);
var socketHandler = require('./server/config/socketHandler.js');

var port = 3000;

// parse .jsx files
var ReactEngine = require('react-engine');
var engine = ReactEngine.server.create({});
app.engine('.jsx', engine);

console.log('Node Environment: ', process.env.NODE_ENV);

var isDev = process.env.NODE_ENV === 'development';
if (isDev) {

	app.get('/', function(req, res) {
		res.sendFile(__dirname + '/build/index.html');
	});

	app.use('/', express.static(__dirname + '/build'));

	io.on('connection', socketHandler);

	server.listen(3000);
} else {
	app.use('/', express.static(__dirname + '/dist'));
}

// app.listen(port, function() {
// 	console.log('App listening on port', port);
// });




