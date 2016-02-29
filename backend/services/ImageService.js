"use strict";

var request = require('superagent');
var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var AuthService = require('./AuthService');
var imageURL = config.OB_URL + '/get_image';

function getImage(callback) {  
  console.log(imageURL);
  request
  .get(imageURL)
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
  getImage: logger.wrapFunction(getImage)
};