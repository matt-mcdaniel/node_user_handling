var express = require('express');
var app = express();

var path = require('path');
var fs = require('fs');
var engines = require('consolidate');
var Q = require('q');

app.engine('hbs', engines.handlebars);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

function readDir() {
	var deferred = Q.defer();
	fs.readdir('users', function(err, data) {
		if (err) console.log(err);
		deferred.resolve(data);
	})
	return deferred.promise;
}

function getContents(filenames) {
	return Q.all(
		filenames.map(function(filename) {
			return Q.nfcall(fs.readFile, 'users/' + filename, 'utf8').then(JSON.parse);
		})
	);
}

var users = [];
readDir()
	.then(getContents)
	.then(function(contents) {
		users = contents;
	});

function getById(id, cb) {
	users.forEach(function(v) {
		if (v._id === id) {
			return cb(v);
		}
	});
}

app.get('/', function(req, res) {
	console.log(users);
	res.render('users', { users: users })
});

app.get('/:id', function(req, res) {
	var user = getById(req.params.id, function(user) {
		res.render('detail', { user: user });
	});
});

var server = app.listen(3000, function() {
	console.log('App listening on port', server.address().port);
});
