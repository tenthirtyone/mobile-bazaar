"use strict";

var request = require('superagent');
var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var saleURL = config.OB_URL + '/get_sales';
var AuthService = require('./AuthService');

function getSales(callback) {  
  console.log(AuthService.getCookie());
  request
  .get(saleURL)
  .set('Cookie', AuthService.getCookie())
  .end(function(err, res){
    if (err) {
      return callback({success: false, msg: 'getSale failed, check OB Backend'});
    }
    return callback(null, res.body);
  });
}

module.exports = {
  getSales: logger.wrapFunction(getSales)
};