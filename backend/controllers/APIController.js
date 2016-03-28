var express = require("express");
var config = require("config");
var async = require("async");
var router = express.Router();
var AuthService = require("../services/AuthService.js");
var ImageService = require("../services/ImageService.js");
var FollowingService = require("../services/FollowingService.js");
var ProfService = require("../services/ProfileService.js");
var SaleService = require("../services/SaleService.js");

module.exports = router;

router.get("/following", function(req, res) {
  console.log('woosh');
  async.waterfall([
    function validateToken(callback) {
      AuthService.checkToken(req.headers.authorization, function(err, token) {
        if (err) {
          return callback({error: err});
        }
        return callback(null, token);
      });
    },
    function(token, callback) {
      FollowingService.getFollowing(function(err, following){
        if (err) {
          return callback(err);
        }  
          return callback(null, token, following);
      });      
    }], function(err, token, following) {
      if (err) {
        res.status(404).json({error: err});
      } else {
        res.header({
          "Authorization": token.token
        });
        res.send({following: following.following});        
      }
  });
});

router.get("/image", function(req, res) {
  async.waterfall([
    function validateToken(callback) {
      AuthService.checkToken(req.headers.authorization, function(err, token) {
        if (err) {
          return callback({error: err});
        }
        return callback(null, token);
      });
    },
    function(token, callback) {
      ImageService.getImage(function(err, image){
        if (err) {
          return callback(err);
        }  
          return callback(null, token, image);
      });      
    }], function(err, token, image) {
      if (err) {
        res.status(404).json({error: err});
      } else {
        res.header({
          "Authorization": token.token
        });
        res.send({image: image.image});        
      }
  });  
})

router.get("/login", function(req, res) {
  AuthService.login(req.headers.authorization, function(err, token, result) {
    if (err) {
      res.status(401).json({error: err});
    } else {
      res.header({
        "Authorization": token
      });
      res.send(result);  
    };
  })
});

router.get("/profile", function(req, res) {
  async.waterfall([
    function validateToken(callback) {
      AuthService.checkToken(req.headers.authorization, function(err, token) {
        if (err) {
          return callback({error: err});
        }
        return callback(null, token);
      });
    },
    function(token, callback) {
      ProfService.getProfile(function(err, profile){
        if (err) {
          return callback(err);
        }  
          return callback(null, token, profile);
      });      
    }], function(err, token, profile) {
      if (err) {
        res.status(404).json({error: err});
      } else {
        res.header({
          "Authorization": token.token
        });
        res.send({profile: profile.profile});        
      }
  });
});

router.get("/sales", function(req, res) {
  async.waterfall([
    function validateToken(callback) {
      AuthService.checkToken(req.headers.authorization, function(err, token) {
        if (err) {
          return callback({error: err});
        }
        return callback(null, token);
      });
    },
    function(token, callback) {
      SaleService.getSales(function(err, sales){
        if (err) {
          return callback(err);
        }  
          return callback(null, token, sales);
      });      
    }], function(err, token, sales) {
      if (err) {
        res.status(404).json({error: err});
      } else {
        res.header({
          "Authorization": token.token
        });
        res.send({sales: sales});        
      }
  });
});

router.post("/test", function(req, res) {
    res.send('test');
});