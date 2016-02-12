"use strict";

var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var token;

function checkToken(userToken, callback) {
  if (!token) {
    return callback({success: false, msg: 'Auth failed, missing valid token'});
  }
  if (userToken === token) {
    token = jwt.sign({ username: config.USERNAME }, config.SECRET_SEED);
    return callback(null, {success: true, token: token});
  } else {
    return callback({success: false, msg: 'Auth failed, missing valid token'});
  }
}

function getToken() {
  return token;
}

function login(authData, callback) {  
  if (authData !== 'Basic ' + config.USERNAME + ':' + config.PASSWORD) {
    return callback({success: false, msg: 'Auth failed, credentials failed.'});
  } else {
    token = jwt.sign({ username: config.USERNAME }, config.SECRET_SEED);
    return callback(null, token);
  }
}

module.exports = {
  getToken: getToken,
  login: logger.wrapFunction(login),
  checkToken: logger.wrapFunction(checkToken)
};