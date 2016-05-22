/**
 * Little middleware which enables Cross-Origin Resource Sharing.
 *
 * @Author: Stanley Sathler
 * @Notes: created following instructions from book 
 * "Building applications with NodeJS", from William Bruno Moraes.
 **/
'use strict';

module.exports = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
};