(function() {
  'use strict';
  
  angular.module('mobile-bazaar.login')
  .service('LoginService', LoginService);
  
  LoginService.$inject = ['$http', '$state'];
  
  function LoginService($http, $state) {
    var login = true;
    var APIURL = 'http://localhost:28469/api/login';
    var loginError = false;
    var loginErrorMsg = '';

    return {
      getErrorMsg: getErrorMsg,
      isLoginError: isLoginError,
      Login: Login    
    };
    
    function getErrorMsg() {
      return loginErrorMsg;
    }
    
    function isLoginError() {
      return loginError;
    }
    
    function Login(credentials) {
      $http.post(APIURL, 
                 {username: credentials.username, 
                  password: credentials.password})
      .then(function(res) {
        $state.go('profile');
        loginError = false;
        loginErrorMsg = '';
      }) 
      .catch(function(err) {
        //log
        loginError = true;
        loginErrorMsg = err.data.error.msg || 'Auth Failed';
      })
    }
    
  }
  
}());