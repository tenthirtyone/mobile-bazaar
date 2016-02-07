(function() {
  'use strict';
  
  angular.module('angular-template.login')
  .controller('LoginController', LoginController);
  
  LoginController.$inject = ['LoginService'];
  
  function LoginController(LoginService) {
    var vm = this;
    vm.credentials = {
      username: '',
      password: ''
    };
    
    vm.login = function(credentials) {
      LoginService.Login(credentials);
    };
    
    return vm;
    
  }
  
}());