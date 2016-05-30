'use strict';

/**
 * Dependencies
 **/
var moment = require('moment');
var jwt    = require('jwt-simple');
var config = require('config');

/**
 * Constructor
 **/
function LoginController(){
	var self = this;

	self.createToken = function(req, res, next){
		var username = req.body.username;
		var password = req.body.password;
		var authenticated = username === 'admin' && password === 'black';

		if(!authenticated){
			var error = new Error('Unauthorized');
			    error.status = 401;
			return next(error);
		}

		var expires = moment().add(7, 'days').valueOf();
		var token   = jwt.encode({ user: username, exp: expires }, config.get('jwtSecretKey'));
		res.json({ token: token});
	}; 
}

/**
 * Exports as a module
 **/
module.exports = new LoginController();