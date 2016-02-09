(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile')
  .service('ProfileService', ProfileService);
  
  ProfileService.$inject = ['$http'];
  
  function ProfileService($http) {
    var APIURL = 'http://localhost:28469/api/profile';
    
    return {
      getProfile: getProfile    
    };
    
    function getProfile() {
      $http.get(APIURL)
      .then(function(res) {
        console.log(res);      
      }) 
      .catch(function(err) {
        console.log(err);
      })
    }
    
  }
  
}());