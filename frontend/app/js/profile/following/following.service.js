(function() {
  'use strict';
  
  angular.module('mobile-bazaar.following')
  .service('FollowingService', FollowingService);
  
  FollowingService.$inject = ['$http'];
  
  function FollowingService($http) {
    var APIURL = 'http://localhost:28469/api/following';
    var following = {};
    
    
    return {
      getFollowing: getFollowing,
      setFollowing: setFollowing  
    };
      
    function getFollowing() {
      return following;
    }    
     
    function setFollowing() {
      $http.get(APIURL)
      .then(function(res) {
        following = res.data.following || {};
      })
      .catch(function(err){
        console.log(err);
      });
    }
    
  }
  
}());