(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .service('SettingsService', SettingsService);
  
  SettingsService.$inject = ['$http'];
  
  function SettingsService($http) {
    var APIURL = 'http://localhost:28469/api/settings';

    return {
      getSettings: getSettings
    };
      
    function getSettings() {
      return $http.get(APIURL)
      .then(function(res) {
        console.log(res.data);
        return res.data;
      })
      .catch(function(err){
        console.log(err);
      });
    }        
  }
  
}());