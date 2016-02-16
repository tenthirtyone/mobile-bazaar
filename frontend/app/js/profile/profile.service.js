(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile')
  .service('ProfileService', ProfileService);
  
  ProfileService.$inject = ['$http'];
  
  function ProfileService($http) {
    var APIURL = 'http://localhost:28469/api/profile';
    var profile = {};
    
    
    return {
      getGUID: getGUID,    
      getProfile: getProfile,
      getWebsite: getWebsite,
      setProfile: setProfile    
    };
    
    function getGUID() {
      return profile.guid;
    }    
        
    function getProfile() {
      return profile;
    }    
    
    function getWebsite() {
      return profile.website || 'No Website Defined';
    }
    
    function setProfile() {
      $http.get(APIURL)
      .then(function(res) {
        console.log(res);  
        profile = res.data.profile || {};
      })
      .catch(function(err){
        console.log(err);
      });
    }
    
  }
  
}());