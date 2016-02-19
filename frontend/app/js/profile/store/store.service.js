(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .service('StoreService', StoreService);
  
  StoreService.$inject = ['$http'];
  
  function StoreService($http) {
    var APIURL = 'http://localhost:28469/api/profile';
    var followers = {};
    
    return {
     
    };
       
  }
  
}());