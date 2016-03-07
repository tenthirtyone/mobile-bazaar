(function() {
  'use strict';
  
  angular.module('mobile-bazaar.listing')
  .service('ListingService', ListingService);
  
  ListingService.$inject = ['$http'];
  
  function ListingService($http) {
    
  }
  
}());