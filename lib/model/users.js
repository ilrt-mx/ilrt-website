/*!
 * ilrt-website - users.js
 * Copyright (c) 2012 Anonymous <ilrt.mx@gmail.com>
 * MIT Licensed
 */
 
/**
 * Module dependencies.
 */

var db = require('./connection').db;

/**
 * Authenticates against the database.
 *
 * @param {String} email
 * @param {String} password
 * @param {Function} callback
 * @api public
 */

exports.authenticate = function (email, password, callback) {
  db.query('SELECT name, email FROM users WHERE email ="'+email+'" AND password ="'+password+'"', function (err, res) {
    if (err) console.log(err);
    if (callback) callback(res[0]);
  });
}