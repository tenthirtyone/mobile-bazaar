"use strict";

var request = require('superagent');
var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var profileURL = config.OB_URL + '/profile';

function getProfile(callback) {  
  request
  .get(profileURL)
  .end(function(err, res){
    if (err) {
      return callback({success: false, msg: 'getProfile failed, check OB Backend'});
    }
    console.log(res);
    return callback(res.body);
  });
}

module.exports = {
  getProfile: logger.wrapFunction(getProfile)
};