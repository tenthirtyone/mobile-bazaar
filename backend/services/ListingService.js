"use strict";

var request = require('superagent');
var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var getlistingURL = config.OB_URL + '/get_listings';
var postlistingURL = config.OB_URL + '/contracts';
var AuthService = require('./AuthService');

function getListings(callback) {  
  console.log(AuthService.getCookie());
  request
  .get(getlistingURL)
  .set('Cookie', AuthService.getCookie())
  .end(function(err, res){
    if (err) {
      return callback({success: false, msg: 'getListings failed, check OB Backend'});
    }
    return callback(null, res.body);
  });
}

function addListing(listing, callback) {  
  console.log(AuthService.getCookie());
  request
  .post(postlistingURL)
  .type('form')
  .send(listing)
  .end(function(err, res){
    if (err) {
      console.log('error', err);
      return callback({success: false, msg: 'addListing failed, check OB Backend'});
    }
    return callback(null, res.headers);
  });
}

module.exports = {
  getListings: logger.wrapFunction(getListings)
};