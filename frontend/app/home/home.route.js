(function() {
  'use strict';
  angular
    .module('mobile-bazaar.home')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'home',
        config: {
          url: '/home',
          controller: 'HomeController',
          controllerAs: "home",
          templateUrl: 'views/home.template.html'
        }
      }
    ];
  }
}());