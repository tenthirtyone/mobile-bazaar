(function() {
  'use strict';
  
  angular.module('angular-template.home')
  .controller('HomeController', HomeController);
  
  HomeController.$inject = ['HomeService'];
  
  function HomeController(HomeService) {
    var vm = this;
    
    vm.tiledata = function() {
      return HomeService.getHomeData();
    };
    
    return vm;
    
  }
  
}());