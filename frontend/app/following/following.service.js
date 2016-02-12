(function() {
  'use strict';
  
  angular.module('mobile-bazaar.following')
  .service('FollowingService', FollowingService);
  
  FollowingService.$inject = ['$http'];
  
  function FollowingService($http) {
    var APIURL = 'http://localhost:28469/api/following';
    var following = {};
    
    
    return {
      getfollowing: getfollowing  
    };
      
    function getFollowing() {
      return following;
    }    
    
    
    function setProfile() {
      $http.get(APIURL)
      .then(function(res) {
        console.log(res);  
        profile = res.data.following || {};
      })
      .catch(function(err){
        console.log(err);
      });
    }
    
  }
  
}());