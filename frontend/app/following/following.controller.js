(function() {
  'use strict';
  
  angular.module('mobile-bazaar.following')
  .controller('FollowingController', FollowingController);
  
  FollowingController.$inject = ['FollowingService'];
  
  function FollowingController(FollowingService) {
    var vm = this;
    vm.following = getFollowing;
    
    init();
    
    function init() {
      FollowingService.setFollowing();
    }
    
    function getFollowing() {
      return FollowingService.getFollowing();
    }
  
     return vm;
  }
  
}());