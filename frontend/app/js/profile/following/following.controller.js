(function() {
  'use strict';
  
  angular.module('mobile-bazaar.following')
  .controller('FollowingController', FollowingController);
  
  FollowingController.$inject = ['FollowingService'];
  
  function FollowingController(FollowingService) {
    var vm = this;
    vm.following = [];
    
    init();
    
    function init() {
      return getFollowing().then(function() {
        console.log('getting following');
      });
    }
    
    function getFollowing() {
        return FollowingService.getFollowing()
            .then(function(data) {
                vm.following = data;
                return vm.following;
            });
    }    
  
     return vm;
  }
  
}());