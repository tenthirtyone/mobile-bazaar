(function() {
  'use strict';
    
  angular.module('mobile-bazaar', [
    'mobile-bazaar.directives',
    'mobile-bazaar.followers',
    'mobile-bazaar.following',
    'mobile-bazaar.profile',
    'mobile-bazaar.login',
    'ui.router',
    'ngStorage'
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