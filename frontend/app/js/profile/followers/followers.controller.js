(function() {
  'use strict';
  
  angular.module('mobile-bazaar.followers')
  .controller('FollowersController', FollowersController);
  
  FollowersController.$inject = ['FollowersService'];
  
  function FollowersController(FollowerService) {
    var vm = this;
    vm.followers = getFollowers;
    
    init();
    
    function init() {
      FollowersService.setFollowers();
    }
    
    function getFollowers() {
      return FollowersService.getFollowers();
    }
  
     return vm;
  }
  
}());