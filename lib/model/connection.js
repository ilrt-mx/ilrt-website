/*!
 * ilrt-website - connection.js
 * Copyright (c) 2012 Anonymous <ilrt.mx@gmail.com>
 * MIT Licensed
 */
 
/**
 * Module dependencies.
 */
 
var config = require('../../config.json').database;
var mysql = require('mysql');

/**
 * Initiates the database connection and exposes it.
 *
 * @api public
 */

exports.init = function () {
  exports.db = new Connection(
    config.host, 
    config.port, 
    config.database, 
    config.user, 
    config.pass
  );
}

/**
 * Connection constructor.
 *
 * @param {String} host
 * @param {Number} port
 * @param {String} database
 * @param {String} user
 * @param {String} pass
 * @api private
 */

function Connection (host, port, database, user, pass) {
  this.client;
  this.host = host;
  this.port = port;
  this.database = database;
  this.connect(user, pass);
}

/**
 * Connect to the host.
 *
 * @param {String} user
 * @param {String} password
 * @api private
 */

Connection.prototype.connect = function (user, password) {	
  this.client = mysql.createClient({
      host: this.host
    , port: this.port
    , database: this.database
    , user: user
    , password: password
  });
  this.client.on('error', function (error) {
    if (error) throw error;
  });
  console.log('Connected to database: '+this.host);
}

/**
 * Query the database with the given string.
 *
 * @param {String} string
 * @param {Function} callback
 * @api private
 */

Connection.prototype.query = function (string, callback) {
  var query = this.client.query(string);
  query.result = [];
		
  query.on('row', function (row) {
    query.result.push(row);
  });
		
  query.on('error', function (error) {
    if (callback)
	  callback(error);
  });
		
  query.on('end', function () {
    if (callback)
      callback(undefined, query.result);
  });
}