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

    }
  }

  function DirectiveController($window, $timeout) {
    var vm = this;
    var tempVal = '';
    
    vm.editMode = false;    
    
    vm.editCancel = function() {      
      vm.editMode = false;
      vm.data = tempVal;
      tempVal = ''
    }    
    
    vm.editOff = function() {
      vm.editMode = false;
    }
    
    vm.editOn = function() {
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

      //This is kind of an angular/JS limitation.
      //The DOM won't update until after the function is run
      //so I need an async function 
      $timeout(function() {
        if (el) {
        el[0].focus();
        el[0].select();
        }
      });
      
      

    }
    
    
  }
}());