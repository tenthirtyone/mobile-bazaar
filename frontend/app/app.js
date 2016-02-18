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
        '50': '#4a94cc',
        '100': '#3788c5',
        '200': '#327ab1',
        '300': '#2c6d9d',
        '400': '#275f89',
        '500': '215175',
        '600': '#1b4361',
        '700': '#16354d',
        '800': '#102839',
        '900': '#0b1a25',
        'A100': '#5ea0d1',
        'A200': '#71acd7',
        'A400': '#85b7dd',
        'A700': '#050c12'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

      var customAccent = {
          '50': '#e6edf4',
          '100': '#d4e0ec',
          '200': '#c3d3e4',
          '300': '#b1c6dc',
          '400': '#a0b9d4',
          '500': '8eaccc',
          '600': '#7c9fc4',
          '700': '#6b92bc',
          '800': '#5985b4',
          '900': '#4c79a8',
          'A100': '#f7f9fc',
          'A200': '#ffffff',
          'A400': '#ffffff',
          'A700': '#446c97'
      };
      $mdThemingProvider
          .definePalette('customAccent', 
                          customAccent);

      var customWarn = {
          '50': '#e2a29c',
          '100': '#dc9088',
          '200': '#d67e74',
          '300': '#d06b61',
          '400': '#ca594d',
          '500': 'c4473a',
          '600': '#b04034',
          '700': '#9d392e',
          '800': '#893229',
          '900': '#752a23',
          'A100': '#e7b5b0',
          'A200': '#edc7c3',
          'A400': '#f3dad7',
          'A700': '#62231d'
      };
      $mdThemingProvider
          .definePalette('customWarn', 
                          customWarn);

      var customBackground = {
        '50': '#737373',
        '100': '#666666',
        '200': '#595959',
        '300': '#4d4d4d',
        '400': '#404040',
        '500': '#333',
        '600': '#262626',
        '700': '#1a1a1a',
        '800': '#0d0d0d',
        '900': '#000000',
        'A100': '#808080',
        'A200': '#8c8c8c',
        'A400': '#999999',
        'A700': '#000000'
    };
      $mdThemingProvider
          .definePalette('customBackground', 
                          customBackground);

     $mdThemingProvider.theme('default')
         .primaryPalette('customPrimary')
         
    
  }]);    
}());