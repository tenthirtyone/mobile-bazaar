(function() {
  'use strict';
  angular
    .module('mobile-bazaar.following')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'following',
        config: {
          url: '/following',
          controller: 'FollowingController',
          controllerAs: "following",
          templateUrl: 'views/following.template.html',
          // Custom route parameters
          profileTab: true
        }
      }
    ];
  }
}());