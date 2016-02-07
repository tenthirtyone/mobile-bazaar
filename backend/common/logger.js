"use strict";

var _ = require('underscore');
var winston = require('winston');
var util = require('util');
var config = require("config");
var Path = require("path");

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({level: config.RUN_MODE}),
        new (winston.transports.File)({filename: Path.join(__dirname, '../logs/app.log'), level: config.RUN_MODE})
    ]
});

logger.logFullError = function (err, signature) {//jshint ignore:line
    if (!err) {
        return;
    }
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    winston.error.apply(winston, args);
    winston.error(util.inspect(err));
    winston.error(err.stack);
};

logger.wrapFunction = function (fn, name) {
    if (config.RUN_MODE !== "debug") {
        return fn;
    }
    if (!name) {
        name = fn.name;
    }
    return function () {
        logger.debug("ENTER " + fn.name);
        var args = Array.prototype.slice.call(arguments);
        var orgCallback = args.pop();
        if (!_.isFunction(orgCallback)) {
            throw new Error("Last argument must be a callback function");
        }
        logger.debug("input arguments");
        logger.debug(util.inspect(args));
        var newCallback = function () {
            var cbArgs = Array.prototype.slice.call(arguments);
            if (cbArgs[0]) {
                logger.logFullError(cbArgs[0], name);
            }
            logger.debug("EXIT " + fn.name);
            logger.debug("output arguments");
            logger.debug(util.inspect(cbArgs));
            orgCallback.apply(this, cbArgs);
        };
        args.push(newCallback);
        fn.apply(this, args);
    };
};

module.exports = logger;