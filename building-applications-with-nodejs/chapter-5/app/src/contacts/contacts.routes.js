'use strict';

/**
 * Dependencies
 **/
var authenticate = require('passport').authenticate('basic', {session: false});
var router       = require('express').Router();
var controller   = require('./contacts.controller'); 

/**
 * Routes 
 **/
router.get('/', authenticate, controller.findAll);
router.get('/:id', authenticate, controller.findById);
router.post('/', authenticate, controller.create);
router.put('/:id', authenticate, controller.update);
router.delete('/:id', authenticate, controller.delete);

/**
 * Exports as a module
 **/
module.exports = router;