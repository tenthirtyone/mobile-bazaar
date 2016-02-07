(function() {
  'use strict';
    
  angular.module('mobile-bazaar', [
    'mobile-bazaar.home',
    'mobile-bazaar.login',
    'ui.router'
  ]);
   
  // Response Headers
  angular.module('mobile-bazaar')
  .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.headers.common = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      };       
  }]);  

}());