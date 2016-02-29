(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .service('SettingsService', SettingsService);
  
  SettingsService.$inject = ['$http'];
  
  function SettingsService($http) {
    var APIURL = 'http://localhost:28469/api/profile';
    var followers = {};
    
    return {
     
    };
       
  }
  
}());