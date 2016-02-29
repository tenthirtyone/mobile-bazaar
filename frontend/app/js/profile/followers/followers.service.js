(function() {
  'use strict';
  
  angular.module('mobile-bazaar.followers')
  .service('FollowersService', FollowersService);
  
  FollowersService.$inject = ['$http'];
  
  function FollowersService($http) {
    var APIURL = 'http://localhost:28469/api/followers';
    var followers = {};
    
    
    return {
      getFollowers: getFollowers,
      setFollowers: setFollowers  
    };
      
    function getFollowers() {
      return following;
    }    
     
    function setFollowers() {
      $http.get(APIURL)
      .then(function(res) {
        followers = res.data.followers || {};
      })
      .catch(function(err){
        //console.log(err);
      });
    }
    
  }
  
}());