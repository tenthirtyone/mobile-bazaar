(function() {
  "use strict";
  
  angular.module('mobile-bazaar')
    .factory('tokenInterceptor', tokenInterceptor);
       
    tokenInterceptor.$inject = ['$sessionStorage'];
  
    function tokenInterceptor($sessionStorage) {  
      return {
          request: function(config) {
              if (!config.headers.Authorization){
                config.headers.Authorization = $sessionStorage.token || '';
              }
              return config;
          },
          response: function(response) {
            if(response.headers('Authorization')) {
              $sessionStorage.token = response.headers('Authorization');
            }
            return response;
          }
      };
  }
  
  angular.module('mobile-bazaar')
    .config(['$httpProvider', function($httpProvider) {  
      $httpProvider.interceptors.push('tokenInterceptor');
  }]);
}());