"use strict";

var request = require('superagent');
var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var followerURL = config.OB_URL + '/get_followers';

function getFollowers(callback) {  
  console.log(followerURL);
  request
  .get(followerURL)
  .end(function(err, res){
    if (err) {
      return callback({success: false, msg: 'getFollowers failed, check OB Backend'});
    }
    console.log(res);
    return callback(null, res.body);
  });
}

module.exports = {
  getFollowers: logger.wrapFunction(getFollowers)
};