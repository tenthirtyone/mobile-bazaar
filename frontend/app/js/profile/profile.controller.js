(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile')
  .controller('ProfileController', ProfileController);
  
  ProfileController.$inject = ['ProfileService', 'routerHelper'];
  
  function ProfileController(ProfileService, routerHelper) {
    var vm = this;
  
    vm.swipeLeft = swipeLeft;
    vm.guid = getGUID;
    vm.profile = getProfile;
    vm.tabs = [];
    vm.website = getWebsite;
    
    init();
    
    function init() {
      ProfileService.setProfile();
      angular.forEach(routerHelper.getStates(), function(state) {
        console.log(state);
        if (state.profileTab) {
          this.push(state);
        }
      }, vm.tabs);       
      vm.tabs.sort(compare);  
    }
    
    function compare(a,b) {
      
      if (a.name < b.name)
        return -1;
      else if (a.name > b.name)
        return 1;
      else 
        return 0;
    }

  
    
    function swipeLeft() {
      console.log('left swipe');
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