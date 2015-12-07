var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.use('/', express.static(__dirname + '/dist'));

app.listen(port, function() {
	console.log('App listening on port', port);
});

// Bootstrap Routes
require('./server/config/routes')(app);


