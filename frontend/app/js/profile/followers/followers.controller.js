(function() {
  'use strict';
  
  angular.module('mobile-bazaar.followers')
  .controller('FollowersController', FollowersController);
  
  FollowersController.$inject = ['FollowersService'];
  
  function FollowersController(FollowersService) {
    var vm = this;
    vm.followers = [];
    
    init();
    
    function init() {
      return getFollowers().then(function() {
        console.log('getting followers');
      });
    }
    
    function getFollowers() {
        return FollowersService.getFollowers()
            .then(function(data) {
                vm.followers = data;
                return vm.followers;
            });
    }    
  
     return vm;
  }
  
}());