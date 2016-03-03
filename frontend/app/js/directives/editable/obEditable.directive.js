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
          heading: '@',
          data: '=',
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

  function DirectiveController($window) {
    var vm = this;
    var tempVal = '';
    
    vm.editMode = false;    
    
    vm.editCancel = function() {
      console.log('editCancel');
      vm.editMode = false;
      vm.data = tempVal;
    }    
    
    vm.editOff = function() {
      console.log('editOff');
      vm.editMode = false;
    }
    
    vm.editOn = function() {
      console.log('editOn');
      tempVal = vm.data;
      vm.editMode = true;
      vm.setFocus();
    }
    
    vm.saveData = function() {
      //Make Service Call
      vm.editOff();
    }
    
    vm.setFocus = function() {
      //var el = $window.document.getElementById(vm.heading);
      var el = angular.element(document.querySelector('#' + vm.heading));
      console.log(el[0]);
      if (el) {
        el[0].focus();
      }
    }
    
    
  }
}());