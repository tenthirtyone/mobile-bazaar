(function() {
  'use strict';
  
  angular.module('mobile-bazaar.following')
  .controller('FollowingController', FollowingController);
  
  FollowingController.$inject = ['FollowingService'];
  
  function FollowingController(FollowingService) {
    var vm = this;
    
    init();
    
    function init() {
     
    }
  
     return vm;
  }
  
}());