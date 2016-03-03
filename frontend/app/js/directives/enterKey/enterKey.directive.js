(function() {
  'use strict';
  
  angular
    .module('mobile-bazaar.directives')
    .directive('ngEnterKey', ngEnterKey);

  function ngEnterKey() {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;
    
    function link(scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
          event.preventDefault();
          scope.$apply(function (){
            scope.$eval(attrs.ngEnterKey);
          });
          
        }
      });
    }
  }

}());