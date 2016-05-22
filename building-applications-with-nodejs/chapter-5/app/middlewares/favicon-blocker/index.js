/**
 * Little middleware which responds with an empty
 * text when a favicon is requested, since RESTful 
 * APIs does not need to serve this type of data.
 *
 * We could easily use NPM Cors package, but I decided 
 * to keep this one.
 *
 * @Author: Stanley Sathler
 * @Notes: created following instructions from book 
 * "Building applications with NodeJS", from William Bruno Moraes.
 **/
'use strict';

module.exports = function(req, res, next){
	if(req.url.indexOf('favicon.ico') !== -1){
		res.writeHead(200, {'Content-Type': 'image/x-icon'});
		res.end('');
	} else {
		next();
	}
};