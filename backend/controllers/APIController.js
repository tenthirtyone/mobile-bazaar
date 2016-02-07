"use strict";

var express = require("express");
var config = require("config");
var async = require("async");
var router = express.Router();
var AuthService = require("../services/AuthService.js");
var ProfService = require("../services/ProfileService.js");

module.exports = router;

router.post("/login", function(req, res) {
  AuthService.login(req.body, function(err, result) {
    if (err) {
      res.status(404).json({error: err});
    }
    res.send(result);
  })
});

router.get("/profile", function(req, res) {
  AuthService.checkToken(req.headers.token, function(err) {
  if (err) {
    res.status(404).json({error: err});
  }
    setTimeout(function() {
    console.log('Blah blah blah blah extra-blah');
}, 3000);
  });
  
  ProfService.getProfile(function(err, profile){
    if (err) {
      res.status(404).json(err);
    }  
      res.send({profile: profile});
  });
  
});

router.post("/test/token", function(req, res) {
  AuthService.checkToken(req.headers.token, function(err, token) {
    if (err) {
      res.status(404).json({error: err});
    }
    res.send(token);
  })
});

router.post("/register", function(req, res) {
  AuthService.register(req.body, function(err, result) {
    if (err) {
      res.status(404).json({error: err});
    }
    res.send(req.body);
  });  
});