/*!
 * ilrt-website - meta.js
 * Copyright (c) 2012 Anonymous <ilrt.mx@gmail.com>
 * MIT Licensed
 */
 
/**
 * Module dependencies.
 */

var db = require('./connection').db;

/**
 * Add one render to the "Root Renders" field if `arg` 
 * is a number or pass the value of the "Root Renders" 
 * field to arg if `arg` is a function, in that case `arg` 
 * would be the callback.
 *
 * @param {String} arg
 * @param {Function} arg
 * @api public
 */

exports.rootRenders = function (arg) {
  if (typeof arg == 'number') 
    plusOneRender();
  else if (typeof arg == 'function')
    returnRenders(arg);
};

/**
 * Add one render to the "Root Renders" field.
 *
 * @api private
 */

function plusOneRender () {
  db.query('SELECT data FROM meta WHERE type="Root Renders"', function (err, res) {
    if (err) return console.log(err);
    var num = parseInt(res[0].data)+1;
    db.query('UPDATE meta SET data="'+num+'" WHERE type="Root Renders"', function (err, res) {
      if (err) return console.log(err);
    });
  });
};

/**
 * Pass the value of the "Root Renders" 
 * field to the callback.
 *
 * @param {Function} callback
 * @api private
 */

function returnRenders (callback) {
  db.query('SELECT data FROM meta WHERE type ="Root Renders"', function (err, res) {
    if (err) { 
      console.log(err);
      callback(err);
    }
    callback(undefined, res[0].data);
  });
};