(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile')
  .controller('ProfileController', ProfileController);
  
  ProfileController.$inject = ['ProfileService'];
  
  function ProfileController(ProfileService) {
    var vm = this;
    
    vm.profile = getProfile;
    
    function getProfile() {
      ProfileService.getProfile();
      return {test: 'test'};
    };
        
     return vm;
    
  }
  
}());