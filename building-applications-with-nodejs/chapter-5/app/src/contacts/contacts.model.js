'use strict';

/**
 * Dependencies
 **/
var mongoose = require('../../db/db.mongoose');
var schema   = require('./contacts.schema');
var bluebird = require('bluebird');

/**
 * Model declaration
 **/
function ContactsModel(){
	var self   = this;
	self.contact = mongoose.model('Contact', schema);

	self.find = function(query, callback){
		self.contact.find(query).exec(callback);
	};

	self.findOne = function(id, callback){
		var query = { _id: id };
		self.contact.findOne(query).exec(callback);
	};

	self.create = function(data, callback){
		new self.contact(data).save(function(err, result){
			callback(err, result);
		});
	};

	self.udpate = function(id, data, callback){
		var query = { _id: id };
		self.contact.update(query, data).exec(callback);
	};

	self.remove = function(id, callback){
		var query = { _id: id };
		self.contact.remove(query).exec(callback);
	};
}

/**
 * Exports as a module
 **/
module.exports = function(){
	return bluebird.promisifyAll(new ContactsModel());
}