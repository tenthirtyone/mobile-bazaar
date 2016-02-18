(function() {
  'use strict';
    
  angular.module('mobile-bazaar', [
    'mobile-bazaar.directives',
    'mobile-bazaar.followers',
    'mobile-bazaar.following',
    'mobile-bazaar.profile',
    'mobile-bazaar.login',
    'ngMaterial',
    'ui.router',
    'ngStorage'
  ]);
   
  // Response Headers
  angular.module('mobile-bazaar')
  .config(['$httpProvider', '$mdThemingProvider', function($httpProvider, $mdThemingProvider) {
    $httpProvider.defaults.headers.common = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };     
    
      var customPrimary = {
        '50': '#46afed',
        '100': '#2ea5eb',
        '200': '#179be8',
        '300': '#158cd1',
        '400': '#127dba',
        '500': '106da3',
        '600': '#0e5d8c',
        '700': '#0b4e75',
        '800': '#093e5d',
        '900': '#072f46',
        'A100': '#5db9ef',
        'A200': '#74c3f1',
        'A400': '#8bcdf4',
        'A700': '#051f2f'
    };
      $mdThemingProvider
      .definePalette('customPrimary', 
                      customPrimary);
    
    $mdThemingProvider.theme('default')
      .primaryPalette('customPrimary');
      
    
  }]);    
}());