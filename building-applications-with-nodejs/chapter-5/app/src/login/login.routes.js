'use strict';

/**
 * Dependencies
 **/
var controller = require('./login.controller'); 
var router     = require('express').Router();

/**
 * Routes
 **/
router.post('/', controller.createToken);

/**
 * Exports as a module
 **/
module.exports = router;