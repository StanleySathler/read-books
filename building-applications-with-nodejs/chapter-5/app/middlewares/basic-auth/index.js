/**
 * Little middleware which creates a basic authentication.
 *
 * @Author: Stanley Sathler
 * @Notes: created following instructions from book 
 * "Building applications with NodeJS", from William Bruno Moraes.
 **/
'use strict';

/**
 * Dependencies
 **/
var passport      = require('passport');
var basicStrategy = require('passport-http').BasicStrategy;

/**
 * basicStrategy's callback
 **/
var authentication = function(user, pass, done){
	var authenticated = user.valueOf() === 'admin' && pass.valueOf() === 'black';
	return done(null, authenticated);
};

/**
 * Exports as a module
 **/
module.exports = function(req, res, next){
	passport.use(new basicStrategy(authentication));
	passport.initialize()(req, res, next);
};