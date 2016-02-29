(function() {
  'use strict';
  
  angular.module('mobile-bazaar.following')
  .service('FollowingService', FollowingService);
  
  FollowingService.$inject = ['$http'];
  
  function FollowingService($http) {
    var APIURL = 'http://localhost:28469/api/following';

    return {
      getFollowing: getFollowing
    };
      
    function getFollowing() {
      return $http.get(APIURL)
      .then(function(res) {
        return res.data.following;
      })
      .catch(function(err){
        console.log(err);
      });
    }        
  }
  
}());