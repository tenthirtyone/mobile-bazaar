(function() {
  "use strict";
  
  angular.module('mobile-bazaar')
    .factory('tokenInterceptor', tokenInterceptor);
       
    tokenInterceptor.$inject = ['$localStorage'];
  
    function tokenInterceptor($localStorage) {  
      return {
          request: function(config) {
            config.headers['token'] = $localStorage.token || '';
            return config;
          },
          response: function(response) {
            if(response.headers('token')) {
              $localStorage.token = response.headers('token');
            }
            return response;
          }
      }
  };
  
  angular.module('mobile-bazaar')
    .config(['$httpProvider', function($httpProvider) {  
      $httpProvider.interceptors.push('tokenInterceptor');
  }]);
}());