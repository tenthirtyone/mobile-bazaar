"use strict";

var config = require("config");
var logger = require("../common/logger");
var jwt = require('jsonwebtoken');
var profileURL = config.OB_URL + '/profile';

function getProfile(callback) {  
  
}

module.exports = {
  getProfile: logger.wrapFunction(getProfile);
};