/*!
 * ilrt-website - index.js
 * Copyright (c) 2012 Anonymous <ilrt.mx@gmail.com>
 * MIT Licensed
 */
 
/**
 * Module dependencies.
 */
 
var db = require('./connection');

/**
 * Calls the initiation of the database connection.
 */

db.init();

/**
 * Exposes the modules.
 */

exports.users  = require('./users');
exports.videos = require('./videos');
exports.meta   = require('./meta');