'use strict';

/**
 * Dependencies
 **/
var router     = require('express').Router();
var controller = require('./contacts.controller'); 

/**
 * Routes 
 **/
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;