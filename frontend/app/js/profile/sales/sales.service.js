(function() {
  'use strict';
  
  angular.module('mobile-bazaar.sales')
  .service('SaleService', SaleService);
  
  SaleService.$inject = ['$http'];
  
  function SaleService($http) {
    var APIURL = 'http://localhost:28469/api/sales';
    
    
    return {
     
    };
       
  }
  
}());