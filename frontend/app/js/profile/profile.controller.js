(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile')
  .controller('ProfileController', ProfileController);
  
  ProfileController.$inject = ['ProfileService'];
  
  function ProfileController(ProfileService) {
    var vm = this;
    
    vm.guid = getGUID;
    vm.profile = getProfile;
    vm.website = getWebsite;

    init();
    
    function init() {
      ProfileService.setProfile();
    }
    
    function getGUID() {
      return ProfileService.getGUID();
    }
           
    function getProfile() {
      return ProfileService.getProfile();
    }
            
    function getWebsite() {
      return ProfileService.getWebsite();
    }
        
     return vm;
  }
  
}());