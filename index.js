var express = require('express');
var path = require('path');
var http = require('http');

var config = require('./webpack.hot.config.js');
var proxy = require('proxy-middleware');
var url = require('url');

// sockets
var routes = require('./server/config/routes.js');

var ReactEngine = require('react-engine');
var engine = ReactEngine.server.create({});

console.log('Node Environment: ', process.env.NODE_ENV);

var isDev = process.env.NODE_ENV === 'development';
if (isDev || process.env.NODE_ENV === undefined) {
	// express server
	var app = express();
	app.engine('.jsx', engine);
	//app.use(express.static(__dirname + '/build'));
	app.get('/', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/build/index.html'));
	});
	app.listen(8081);

	// webpack Dev Server
	var webpack = require('webpack');
	var WebpackDevServer = require('webpack-dev-server');
	var server = new WebpackDevServer(webpack(config), {
	    contentBase: path.resolve(__dirname, 'build'),
	    historyApiFallback: true,
	    publicPath: "http://localhost:8080/build/",
	    hot: true,
	    quiet: false,
	    noInfo: false,
	    stats: { colors: true },
	    devServer: {
	    	headers: { "Access-Control-Allow-Origin": "*" }
	    },
	    proxy: {
	    	'*': 'http://localhost:8081'
	    }
	}).listen(8080, 'localhost', function(err, result) {
		if (err) console.warn(err);
		console.log('webpack server listening at localhost:8080')
	});

	routes(app);
	//server.listen(8081, 'localhost', function() {});
	//server.listen(8080);
} else {
	//app.use('/', express.static(__dirname + '/dist'));
}
