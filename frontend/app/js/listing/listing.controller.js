(function() {
  'use strict';
  
  angular.module('mobile-bazaar.listing')
  .controller('ListingController', ListingController);
  
  ListingController.$inject = ['ListingService'];
  
  function ListingController(ListingService) {
    var vm = this;
    
    vm.types = [
      'Physical Item',
      'Digital Item',
      'Service'
    ]
    
  }
}());