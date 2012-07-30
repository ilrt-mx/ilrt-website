/*!
 * ilrt-website - youtube.js
 * Copyright (c) 2012 Anonymous <ilrt.mx@gmail.com>
 * MIT Licensed
 */
 
/**
 * Module dependencies.
 */
 
var http = require('http');
var xml2js = require('xml2js');
var db = require('./connection').db;

/**
 * Get all the information of a video from youtube with his id 
 * and save it to the database.
 *
 * @param {String} id
 * @api public
 */

exports.saveVideoInfo = function (id) {
  requestYoutube();
};

/**
 * Request youtube for the xml file of the video.
 *
 * @param {String} id
 * @api private
 */

function requestYoutube (id) {
  var options = {
    hostname: 'gdata.youtube.com',
    port: 80,
    path: '/feeds/api/videos/'+id,
    method: 'GET'
  };

  var req = http.request(options, function(res) {
    var data = '';
    res.setEncoding('utf8');
    res.on('data', function (chunck) {
      data += chunck;
    });
    res.on('end', function () {
      parseXML(data, id);	
    });
  });

  req.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
  });

  req.end();
};

/**
 * Parse the xml and extract the information to save it in
 * the database.
 *
 * @param {String} string
 * @param {String} idVideo
 * @api private
 */

function parseXML (string, idVideo) {
  var parser = new xml2js.Parser();
  
  parser.parseString(string, function (err, res) {
    if (err) throw err;
    var data = {}
    data.idVideo = idVideo;
    data.title = res['title']['#'];
    data.title = data.title.replace(/"/g, '\\"');
    data.published = res['published'];
    if (res['content']['#']) {
      data.description = res['content']['#'];
      data.description = data.description.replace(/"/g, '\\"');
    }
    else {
      data.description = null;
    }
    updateInfo(data);
  });
};

/**
 * Saves the information in the database.
 *
 * @param {Object} data
 * @api private
 */

function updateInfo (data) {
  db.query(
    'INSERT INTO videos VALUES ("'+data.idVideo+'", "'+data.title+'", "'+data.description+'", "'+data.published+'")',
    function (err) {if (err) return console.log(err);}
  );
};