(function() {
  'use strict';
  angular
    .module('mobile-bazaar.profile')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'profile',
        config: {
          url: '/profile',
          views: {
              '': {
                templateUrl: 'views/profile.template.html',
                controller: 'ProfileController',
                controllerAs: 'profile',
              },
              'about@profile': {
                templateUrl: 'views/about.template.html',
                controller: 'AboutController',
                controllerAs: 'about',
                name: 'About',
              },
              'leftWidgetOne@profile': {
                template: '<h2>One</2>',
              },
              'leftWidgetTwo@profile': {
                template: '<h2>Two</2>',
              },
          }          
          }
      }];
    }
}());