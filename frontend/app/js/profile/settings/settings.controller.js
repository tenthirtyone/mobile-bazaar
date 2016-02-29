(function() {
  'use strict';
  
  angular.module('mobile-bazaar.settings')
  .controller('SettingsController', SettingsController);
  
  SettingsController.$inject = ['SettingsService'];
  
  function SettingsController(SettingsService) {
    var vm = this;
    
    init();
    
    function init() {
      
    }
    
     return vm;
  }
  
}());