'use strict';

var debug = require('debug')('nodejs_book:controller');
var model = require('./contacts.model')();

function ContactsController(){
	var self = this;
	self.model = model;

	self.findAll = function(req, res, next){
		self.model.findAsync({})
		    .then(function(data){
		    	res.json(data);
		    })
		    .catch(next);
	};

	self.findById = function(req, res, next){
		var id = req.params.id;

		self.model.findOneAsync(id)
		    .then(function(data){
		    	res.json(data);	
		    })
		    .catch(next);
	};

	self.create = function(req, res, next){
		self.model.createAsync(req.body)
		    .then(function(data){
		    	res.json(data);
		    })
		    .catch(next);
	};

	self.update = function(req, res, next){
		self.model.updateAsync(req.params.id, req.body)
		    .then(function(data){
		    	res.json(data);
		    })
		    .catch(next);
	};

	self.delete = function(req, res, next){
		self.model.removeAsync(req.params.id)
		    .then(function(data){
		    	res.json(data);
		    })
		    .catch(next);
	};
}

module.exports = new ContactsController();