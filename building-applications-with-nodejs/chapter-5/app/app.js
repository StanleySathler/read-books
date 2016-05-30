'use strict';

/**
 * Dependencies
 **/
var express         = require('express');
var methodOverride  = require('method-override');
var bodyParser      = require('body-parser');
var faviconBlocker  = require('./middlewares/favicon-blocker');
var enableCors      = require('./middlewares/enable-cors');
var errorHandler    = require('./middlewares/error-handler');
var routes          = require('./routes');
var basicAuth       = require('./middlewares/basic-auth');
var app             = express();

/**
 * Useful middlewares
 **/
app.use(faviconBlocker);
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(basicAuth);

/**
 * Routes
 **/
app.use('/', routes);

/**
 * Error handler
 **/
app.use(errorHandler);

/** 
 * Export app config
 **/
module.exports = app;