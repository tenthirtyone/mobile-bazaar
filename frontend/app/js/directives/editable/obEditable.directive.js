(function() {
  'use strict';
  
  angular
    .module('mobile-bazaar.directives')
    .directive('obEditable', obEditable);

  function obEditable() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/obEditable.template.html',
      scope: {
          data: '='
      },
      controller: DirectiveController,
      controllerAs: 'vm',
      bindToController: true,
      link: link
    };

    return directive;
    
    function link(scope, element, attrs) {
      console.log(element);
      console.log(attrs);
    }
  }

  function DirectiveController($timeout) {
    var vm = this;
    vm.editing = false;
    vm.showSave = false
    
    vm.saveData = function() {
      if (vm.showSave === false) {
        vm.showSave = true;
        $timeout(function() {
          console.log('timeout called');
            vm.showSave = false;      
        }, 2000);
      }
    }
  }
}());