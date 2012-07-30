/*!
 * ilrt-website - server.js
 * Copyright (c) 2012 Anonymous <ilrt.mx@gmail.com>
 * MIT Licensed
 */
 
/**
 * Module dependencies.
 */

var config  = require('../config.json').httpServer;
var model   = require('./model');
var express = require('express');
var nowjs   = require('now');

/*
 * Create the server and attache now.
 */

var server = express.createServer();
var shared = nowjs.initialize(server).now;

/*
 * Express http server configuration.
 */

server.configure(function () {
  server.set('views', __dirname+'/../public/views');
  server.set('view engine', 'jade');
  server.use(express.bodyParser());
  server.use(express.cookieParser());
  server.use(express.session({ secret: 'nwidwow2lol!SECRET' }));
  server.use(server.router);
  server.use(express.static(__dirname+'/../public'));
  server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

/*
 * HTTP routing.
 */

server.get('/', function (req, res) {
  model.meta.rootRenders(1);
  res.render('home', {
    title: 'ILRT'
  });
});

server.get('/visitas', function (req, res) {
   model.meta.rootRenders(function (num) {
    if (err) 
      res.render('error', {
        title: '500 Error',
        status: 500, 
        message: 'Problem with root renders meta data.'
      });
    else
      res.render('visitors', {
        title: 'Visitors',
        num: num
      });
  });
});

server.get('/login', function (req, res) {
  if (req.session.connected)
    res.render('login', {
      title: 'Se va a cerrar tu sesión en el primer intento de ingreso.'
    });
  else
    res.render('login', {
      title: 'Bienvenido.'
    });
});

server.post('/logout', function (req, res) {
  req.session.connected = false;
  req.session.user = false;
});

server.post('/authentication', function (req, res) {
  req.session.connected = false;
  req.session.user = false;
  model.users.authenticate(req.body.email, req.body.passw, function (user) {
    if (user) {
      req.session.connected = true;
      req.session.user = user;
      res.contentType('text/plain');
      res.end(JSON.stringify(user));
    }
    else {
      res.contentType('text/plain');
      res.end('nouser');
    }
  });
});

/*
 * Server port listening.
 */

server.listen(config.port);

/*
 * Shared namespace mapping.
 */

shared.loadContent = require('./content').loadContent;