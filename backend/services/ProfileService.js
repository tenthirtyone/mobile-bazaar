"use strict";

var request = require('superagent');
var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var profileURL = config.OB_URL + '/profile';
var AuthService = require('./AuthService');

function getProfile(callback) {  
  console.log(AuthService.getCookie());
  request
  .get(profileURL)
  .set('Cookie', AuthService.getCookie())
  .end(function(err, res){
    if (err) {
      return callback({success: false, msg: 'getProfile failed, check OB Backend'});
    }
    return callback(null, res.body);
  });
}

module.exports = {
  getProfile: logger.wrapFunction(getProfile)
};