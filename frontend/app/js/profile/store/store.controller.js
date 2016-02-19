(function() {
  'use strict';
  
  angular.module('mobile-bazaar.store')
  .controller('StoreController', StoreController);
  
  StoreController.$inject = ['StoreService'];
  
  function StoreController(StoreController) {
    var vm = this;
    
    init();
    
    function init() {
      
    }
    
     return vm;
  }
  
}());