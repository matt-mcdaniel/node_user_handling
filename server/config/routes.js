var express = require('express');
var path = require('path');
var fs = require('fs');
var React = require('react');
var Q = require('q');

module.exports = function(app) {

	var users = [];

	function readDir() {
		var deferred = Q.defer();
		fs.readdir(path.join(__dirname, '/../users'), function(err, data) {
			if (err) console.log(err);
			deferred.resolve(data);
		})
		return deferred.promise;
	}

	function getContents(filenames) {
		return Q.all(
			filenames.map(function(filename) {
				return Q.nfcall(fs.readFile, path.join(__dirname, '/../users/') + filename, 'utf8').then(JSON.parse);
			})
		);
	}

	function getById(id, cb) {
		users.forEach(function(v) {
			if (v._id === id) {
				return cb(v);
			}
		});
	}

	readDir()
		.then(getContents)
		.then(function(contents) {
			users = contents;
		});

	app.get('/admin/users', function(req, res) {
		res.status(200).send({ users: users })
	});

	app.get('/:id', function(req, res) {
		var user = getById(req.params.id, function(user) {
			res.render('detail', { user: user });
		});
	});

}



