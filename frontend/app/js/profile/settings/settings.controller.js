(function() {
  'use strict';
  
  angular.module('mobile-bazaar.settings')
  .controller('SettingsController', SettingsController);
  
  SettingsController.$inject = ['SettingsService'];
  
  function SettingsController(SettingsService) {
    var vm = this;
    vm.settings = {};
    init();
    
    function init() {
      return getSettings().then(function() {
        console.log('getting settings');
      });
    }
    
    function getSettings() {
        return SettingsService.getSettings()
            .then(function(data) {
                vm.settings = data;
                return vm.settings;
            });
    }    
  
     return vm;
  }
  
}());