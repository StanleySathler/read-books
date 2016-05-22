'use strict';

var mongodb = require('../../db/db.mongo');

function ContactsModel(){
	var self = this;
	self.mongodb = mongodb;
	self.collection = self.mongodb.collection('contacts');

	self.find = function(query, callback){
		self.collection.find(query, callback);
	};

	self.findOne = function(id, callback){
		var query = { _id: self.mongodb.ObjectId(id) };
		self.collection.findOne(query, callback);
	};

	self.create = function(data, callback){
		self.collection.insert(data, callback);
	};

	self.update = function(id, data, callback){
		var query = { _id: self.mongodb.ObjectId(id) };
		self.collection.update(query, data, callback);
	};

	self.remove = function(id, callback){
		var query = { _id: self.mongodb.ObjectId(id) };
		self.collection.remove(query, callback);
	};
}

module.exports = new ContactsModel();