(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile')
  .controller('ProfileController', ProfileController);
  
  ProfileController.$inject = ['ProfileService', 'routerHelper'];
  
  function ProfileController(ProfileService, routerHelper) {
    var vm = this;

    vm.tabs = [];
    
    init();
    
    function init() {
      console.log(routerHelper.getStates());
      angular.forEach(routerHelper.getStates(), function(state) {
        console.log(state);
        if (state.name === 'profile') {
          angular.forEach(state.views, function(view) {
            if (view.isTab) {
              this.push(view);
            }
          }, vm.tabs)
        }
      });       
      //vm.tabs.sort(compare);  
      console.log(vm.tabs);
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
    
     return vm;
  }
  
}());