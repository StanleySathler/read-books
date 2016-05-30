'use strict';

/**
 * Dependencies
 **/
var mongoose = require('mongoose');
var debug    = require('debug')('nodejs_book:db');
var config   = require('config');

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
 * Initializes the connection
 **/
mongoose.connect(connection());
var db = mongoose.connection;

db.on('error', function(err){
    debug(err);
});

db.once('open', function(callback){
    debug('Database status: connected to MongoDB.');
});

/**
 * Exports as a module
 **/
module.exports = db;
