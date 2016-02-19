(function() {
  'use strict';
  angular
    .module('mobile-bazaar.followers')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'followers',
        config: {
          url: '/followers',
          controller: 'FollowersController',
          controllerAs: "followers",
          templateUrl: 'views/followers.template.html',
          // Custom route parameters
          profileTab: true
        }
      }
    ];
  }
}());