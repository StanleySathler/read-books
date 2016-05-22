'use strict';

/**
 * Dependencies
 **/
var mongojs = require('mongojs');
var config  = require('config');
var debug   = require('debug')('nodejs_book:db');

/**
 * Connection config
 **/
function connection(){
	var username = config.get('mongo.username');
	var password = config.get('mongo.password');
	var server   = config.get('mongo.server');
	var port     = config.get('mongo.port');
	var database = config.get('mongo.database');
	var auth     = username ? username + ':' + password + '@' : '';
	return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

/**
 * Initializes connection
 **/
var db = mongojs(connection());
db.on('error', function(err){
	debug(err);
});

/**
 * Exports as a module
 **/
module.exports = db;