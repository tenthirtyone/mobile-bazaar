"use strict";

var request = require('superagent');
var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var AuthService = require('./AuthService');
var followingURL = config.OB_URL + '/get_followings';

function getFollowing(callback) {  
  console.log(followingURL);
  request
  .get(followingURL)
  .set('Cookie', AuthService.getCookie())
  .end(function(err, res){
    if (err) {
      return callback({success: false, msg: 'getFollowing failed, check OB Backend'});
    }
    console.log(res);
    return callback(null, res.body);
  });
}

module.exports = {
  getFollowing: logger.wrapFunction(getFollowing)
};