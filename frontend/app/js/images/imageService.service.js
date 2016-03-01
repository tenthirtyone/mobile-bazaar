(function() {
  'use strict';
  
  angular.module('mobile-bazaar.images')
  .service('ImageService', ImageService);
  
  ImageService.$inject = ['$http'];
  
  function ImageService($http) {
    var login = true;
    var APIURL = 'http://localhost:28469/api/image';
    var loginError = false;
    var loginErrorMsg = '';

    return {
      getImage: getImage
    };
    
    function getImage(guid, hash) {
      $http.get(APIURL, 
               {headers : {'Authorization': 'Basic ' + 
                btoa(credentials.username + ':' + credentials.password)}})
      .then(function(res) {
        $state.go('profile');
        loginError = false;
        loginErrorMsg = '';
      }) 
      .catch(function(err) {
        //log
        loginError = true;
        loginErrorMsg = err.data.error.msg || 'Auth Failed';
      });
    }
    
  }
  
}());