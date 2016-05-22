/**
 * Dependencies
 **/
var router   = require('express').Router();
var contacts = require('../src/contacts/contacts.routes');

/**
 * Routes
 **/
router.get('/', function(req, res){
	res.status(201);
	res.send('Welcome! This route does not retrieve nothing. :)');
});

router.use('/contacts', contacts);

/**
 * Exports as a module
 **/
module.exports = router;