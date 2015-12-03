var express = require('express');

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var engines = require('consolidate');
var path = require('path');

var app = express();
var port = 3000;

app.engine('hbs', engines.handlebars);
app.set('config', __dirname + '/config');
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/../app/index.html'));
})

app.listen(port, function() {
	console.log('App listening on port', port);
});

// Bootstrap Routes
//require('./config/routes')(app);
