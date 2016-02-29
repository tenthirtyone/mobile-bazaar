(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .service('AboutService', AboutService);
  
  AboutService.$inject = ['$http'];
  
  function AboutService($http) {
    var APIURL = 'http://localhost:28469/api/profile';
    
    return { 
      getProfile: getProfile 
    };
    
    function getProfile() {
      return $http.get(APIURL)
      .then(function(res) {
        return res.data.profile;
      })
      .catch(function(err){
        console.log(err);
      });
    }        
  }
  
}());