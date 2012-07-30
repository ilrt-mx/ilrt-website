/*!
 * ilrt-website - content.js
 * Copyright (c) 2012 Anonymous <ilrt.mx@gmail.com>
 * MIT Licensed
 */
 
/**
 * Module dependencies.
 */

var model = require('./model');
var jade = require('jade');
var fs = require('fs');

/**
 * Used by the client (using the now framework) to load content from the model.
 *
 * @param {String} name
 * @param {Function} callback
 * @api public
 */

exports.loadContent = function (name, callback) {
  if (name == 'videos')
    model.videos.getTagsWithHTML(callback);
  
  else if (name == 'videos_byTags')
    model.videos.getVideos(arguments[2], callback);
  
  else if (name == 'random_videos')
    model.videos.getRandomVideos(arguments[2], callback);
  
  else
    fs.readFile(__dirname+'/../public/views/'+name+'.jade', function (err, file) {
      var fn = jade.compile(file);
      callback(fn());
    });
};