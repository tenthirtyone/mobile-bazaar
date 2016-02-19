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
      angular.forEach(routerHelper.getStates(), function(state) {
        if (state.name === 'profile') {
          angular.forEach(state.views, function(view) {
            if (view.isTab) {
              this.push(view);
            }
          }, vm.tabs);
        }
      });       
    }

     return vm;
  }
  
}());