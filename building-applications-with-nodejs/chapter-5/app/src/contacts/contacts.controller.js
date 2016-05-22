'use strict';

var debug = require('debug')('nodejs_book:controller');
var model = require('./contacts.model');

function ContactsController(){
	var self = this;
	self.model = model;

	self.findAll = function(req, res, next){
		self.model.find( {}, function(err, data){
			if(err) return next(err);
			res.json(data);
		});
	};

	self.findById = function(req, res, next){
		self.model.findOne( req.params.id, function(err, data){
			if(err) return next(err);
			res.json(data);
		});
	};

	self.create = function(req, res, next){
		self.model.create( req.body, function(err, data){
			if(err) return next(err);
			res.json(data);
		});
	};

	self.update = function(req, res, next){
		self.model.update( req.params.id, req.body, function(err, data){
			if(err) return next(err);
			res.json(data);
		});
	};

	self.delete = function(req, res, next){
		self.model.remove( req.params.id, function(err, data){
			if(err) return next(err);
			res.json(data);
		});
	};
}

module.exports = new ContactsController();