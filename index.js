var express = require('express');
var React = require('react');
var Router = require('react-router');
var engines = require('consolidate');
var path = require('path');

var app = express();
var port = 3000;

app.engine('hbs', engines.handlebars);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/*', function(req, res) {
	console.log('hey');
}))

app.listen(port, function() {
	console.log('App listening on port', port);
});

// Bootstrap Routes
require('./config/routes')(app);
