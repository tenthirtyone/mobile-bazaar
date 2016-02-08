"use strict";

var express = require("express");
var config = require("config");
var async = require("async");
var router = express.Router();
var AuthService = require("../services/AuthService.js");
var ProfService = require("../services/ProfileService.js");

module.exports = router;

router.post("/login", function(req, res) {
  AuthService.login(req.body, function(err, token, result) {
    if (err) {
      res.status(401).json({error: err});
    }
    res.header({
      "token": token
    });
    res.send(result);
  })
});

router.get("/profile", function(req, res) {
  
  async.waterfall([
    function validateToken(callback) {
      AuthService.checkToken(req.headers.token, function(err, token) {
        if (err) {
          return callback({error: err});
        }
        return callback(null, token);
      });
    },
    function(token, callback) {
      ProfService.getProfile(function(err, profile){
        if (err) {
          return callback(err);
        }  
          return callback(null, token, profile);
      });      
    }], function(err, token, profile) {
      if (err) {
        res.status(404).json({error: err});
      }
    res.header({
      "token": token.token
    });
    res.send({profile: profile.profile});
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

router.post("/test", function(req, res) {

    res.send('test');

});