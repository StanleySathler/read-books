'use strict';

/**
 * Dependencies
 **/
var router   = require('express').Router();
var contacts = require('../src/contacts/contacts.routes');
var login    = require('../src/login/login.routes');

/**
 * Routes
 **/
router.get('/', function(req, res){
	res.status(201);
	res.send('Welcome! This route does not retrieve nothing. :)');
});

router.use('/contacts', contacts);
router.use('/login', login);

/**
 * Exports as a module
 **/
module.exports = router;