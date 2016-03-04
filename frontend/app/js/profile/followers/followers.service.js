(function() {
  'use strict';
  
  angular.module('mobile-bazaar.followers')
  .service('FollowersService', FollowersService);
  
  FollowersService.$inject = ['$http'];
  
  function FollowersService($http) {
    var APIURL = 'http://localhost:28469/api/followers';

    return {
      getFollowers: getFollowers
    };
      
    function getFollowers() {
      return $http.get(APIURL)
      .then(function(res) {
        return res.data.followers;
      })
      .catch(function(err){
        console.log(err);
      });
    }        
  }
  
}());