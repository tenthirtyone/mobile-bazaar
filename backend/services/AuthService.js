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
  return callback(null, token);
}

function getToken() {
  return token;
}

function login(userData, callback) {  
  
  if(!userData) {
    return callback({success: false, msg: 'Auth failed, missing username, password attributes.'});
  }
  
  if (!userData.username) {
    return callback({success: false, msg: 'Auth failed, missing username attribute.'});
  };
  
  if (!userData.password) {
    return callback({success: false, msg: 'Auth failed, missing password attribute.'});
  };
  
  console.log(userData.username === config.USERNAME);
  console.log(userData.password === config.PASSWORD);
  
  
  if (userData.username === config.USERNAME && 
      userData.password === config.PASSWORD) {
    
    token = jwt.sign({ username: config.USERNAME }, config.SECRET_SEED);
    
    return callback(null, token, {
                                  success: true, 
                                  msg: 'Auth successful.',
                                         });
  }
  
  return callback({success: false, msg: 'Auth failed, credentials failed.'});  
}

module.exports = {
  getToken: getToken,
  login: logger.wrapFunction(login),
  checkToken: logger.wrapFunction(checkToken)
};