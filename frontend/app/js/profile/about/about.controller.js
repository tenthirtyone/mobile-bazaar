(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .controller('AboutController', AboutController);
  
  AboutController.$inject = ['AboutService'];
  
  function AboutController(AboutController) {
    var vm = this;
    
    init();
    
    function init() {
      
    }
    
     return vm;
  }
  
}());