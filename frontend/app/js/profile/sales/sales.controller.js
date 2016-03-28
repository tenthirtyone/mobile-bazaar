(function() {
  'use strict';
  
  angular.module('mobile-bazaar.sales')
  .controller('SaleController', SaleController);
  
  SaleController.$inject = ['SaleService'];
  
  function SaleController(SaleService) {
    var vm = this;
    
    init();
    
    function init() {
      
    }
    
     return vm;
  }
  
}());