var express = require('express');
var path = require('path');
var fs = require('fs');
var React = require('react');
var Q = require('q');
var Parser = require('simple-text-parser');
var markdown = require('markdown').markdown;

var parser = new Parser();

function readDir(filepath) {
	var deferred = Q.defer();
	fs.readdir(path.join(__dirname, filepath), function(err, data) {
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

function getReadme(filepath) {
	var deferred = Q.defer();
	fs.readFile(path.join(__dirname, filepath), function(err, data) {
		if (err) console.log(err);
		var str = parser.parse(data);
		var parsed = markdown.toHTML(str);
		deferred.resolve(parsed);
	});
	return deferred.promise;
}

module.exports = function(socket) {

	// Users
	readDir('/../users')
		.then(getContents)
		.then(function(contents) {
			// emit users
			socket.emit('users', contents);
		});

	// Readme
	getReadme('./../../README.md')
		.then(function(contents) {
			// emit readme
			socket.emit('readme', contents);
		});

}