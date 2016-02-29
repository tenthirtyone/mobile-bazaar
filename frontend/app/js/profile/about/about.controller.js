(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .controller('AboutController', AboutController);
  
  AboutController.$inject = ['AboutService'];
  
  function AboutController(AboutService) {
    var vm = this;
    vm.profile = {};
    
    init();    
  
    function init() {
      return getProfile().then(function() {
        console.log('getting profile');
      });
    }
    
    function getProfile() {
        return AboutService.getProfile()
            .then(function(data) {
                vm.profile = data;
                return vm.profile;
            });
    }    
    
     return vm;
  }
  
}());