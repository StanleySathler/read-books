#!/usr/bin/env node
var app = require('./app/app');

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening on ' + host + ':' + port);
});