(function() {
  'use strict';
  
  angular
    .module('mobile-bazaar.directives')
    .directive('obNavbar', obNavbar);

  function obNavbar() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/obNavbar.template.html',
      scope: {
          navbardata: '='
      },
      controller: DirectiveController,
      controllerAs: 'vm'
    };

    return directive;
  }

  function DirectiveController() {
    var vm = this;
    
  }
  
}());