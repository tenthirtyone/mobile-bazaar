(function() {
  'use strict';
  
  angular.module('mobile-bazaar.login')
  .controller('LoginController', LoginController);
  
  LoginController.$inject = ['LoginService'];
  
  function LoginController(LoginService) {
    var vm = this;
    vm.credentials = {
      username: '',
      password: ''
    };
    vm.loginSuccess = true;
    
    vm.login = getLogin;
    vm.loginErrorMsg = getErrorMsg;
    vm.isLoginError = isLoginError;
    
    function getErrorMsg() {
      return LoginService.getErrorMsg();
    }
    
    function getLogin(credentials) {
      LoginService.Login(credentials)
    }
    
    function isLoginError() {
      return LoginService.isLoginError();
    }
  }
}());