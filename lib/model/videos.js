/*!
 * ilrt-website - videos.js
 * Copyright (c) 2012 Anonymous <ilrt.mx@gmail.com>
 * MIT Licensed
 */
 
/**
 * Module dependencies.
 */

var db = require('./connection').db;

/**
 * Query tags in the database and create the needed html.
 *
 * @param {Function} callback
 * @api public
 */

exports.getTagsWithHTML = function (callback) {
  db.query('SELECT * FROM tags ORDER BY name', function (err, res) {
    if (err) console.log(err);
    var html = '<form id="tags-form">';
    for (var key in res) {
      html += '<div class="tag">';
      html +=   '<input class="tag-input" type="checkbox" name="'+res[key].name+'" value="'+res[key].name+'"';
      html +=   'onclick="filterVideos()"/>';
      html +=   '<span class="tag-name">'+res[key].name+'</span>';
      html += '</div>';
    }
    html += '<div class="clear-float"></div>';
    html += '</form> <script type="text/javascript">filterVideos()</script>';
    html += '<div id="videos-cont"></div>';
    callback(html);
  });
};

/**
 * Query videos by tags.
 *
 * @param {Array} tags
 * @param {Function} callback
 * @api public
 */

exports.getVideos = function (tags, callback) {
  tags = buildSQLforTags(tags);
  db.query('SELECT * FROM videos '
          +'JOIN videos_tags ON videos.idVideo = videos_tags.idVideo '
          +'JOIN tags ON tags.idTag = videos_tags.idTag '+tags, 
    function (err, res) {
      if (err) console.log(err);
      var html = '';
      for (var key in res)
        html += buildVideoBar(res[key].idVideo, res[key].title, res[key].description);
      callback(html);
  });
};

/**
 * Query an amount of random videos and create the needed html.
 *
 * @param {Number} number
 * @param {Function} callback
 * @api public
 */

exports.getRandomVideos = function (number, callback) {
  db.query('SELECT * FROM videos ORDER BY RAND() LIMIT '+number, function (err, res) {
    if (err) console.log(err);
    var html = '';
    for (var key = 0; key<number; key++)
      html += buildVideoThumbnail(res[key].idVideo);
    callback(html);
  });
};

/**
 * Create the WHERE clause of the videos query using an array of tags.
 *
 * @param {Array} tags
 * @return {String}
 * @api private
 */
 
function buildSQLforTags (tags) {
  if (tags.length == 0) return '';
  var sql = 'WHERE tags.name="'+tags[0]+'"';
  for (var key=1; key<tags.length; key++) {
    sql += ' OR tags.name="'+tags[key]+'"';
  }
  return sql;
};

/**
 * Create the html for a video thumbnail from his id.
 *
 * @param {String} id
 * @return {String}
 * @api private
 */
 
function buildVideoThumbnail (id) {
  var html  = '<img width="250" height="141" ';
      html +=   'src="http://img.youtube.com/vi/'+id+'/0.jpg" ';
      html +=   'onclick="playVideo(\''+id+'\')" ';
      html +=   'style="cursor:pointer;"';
      html += '/>';
  return html;
};

/**
 * Create the html for a video bar from his id, title
 * and description.
 *
 * @param {String} id
 * @param {String} title
 * @param {String} description
 * @return {String}
 * @api private
 */

function buildVideoBar (id, title, description) {
  description = minimizeDescription(description);
  var html  = '<div class="video" ';
      html +=   'onclick="playVideo(\''+id+'\')">';
      html +=   '<img width="250" height="141" ';
      html +=     'src="http://img.youtube.com/vi/'+id+'/0.jpg"';
      html +=   '/>';
      html +=   '<div class="video-info">';
      html +=     '<h3>'+title+'</h3>';
      html +=     '<p>'+description+'</p>';
      html +=   '</div>';
      html +=   '<div class="clear-float"></div>';
      html += '</div>';
  return html;
};

/**
 * Subtracts the rest of the description string 
 * from the 50th position.
 *
 * @param {String} description
 * @return {String}
 * @api private
 */

function minimizeDescription (description) {
  return description.substr(0, 50)+'...';
};