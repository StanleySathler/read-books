/**
 * Little middleware which handles errors for this application.
 *
 * @Author: Stanley Sathler
 * @Notes: created following instructions from book 
 * "Building applications with NodeJS", from William Bruno Moraes.
 **/
'use strict';

var debug = require('debug')('nodejs_book:error');

module.exports = function(err, req, res, next){
	debug(err);
	res.status(err.status || 500);
	res.json({ error: err.message });
};