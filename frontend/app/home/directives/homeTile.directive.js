(function() {
  'use strict';
  
  angular
    .module('angular-template.home')
    .directive('homeTile', homeTile);

  function homeTile() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/homeTile.template.html',
      scope: {
          tiledata: '='
      },
      controller: DirectiveController,
      controllerAs: 'vm',
      //bindToController: true // Use to bind to outer scope
    };

    return directive;
  }

  function DirectiveController() {
    var vm = this;
    
  }
  
}());