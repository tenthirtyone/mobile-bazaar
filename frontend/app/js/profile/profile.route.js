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
          controller: 'ProfileController',
          controllerAs: "profile",
          templateUrl: 'views/profile.template.html',
              views: {
                'about': {
                  templateUrl: 'about.template.html',
                  controller:  'AboutController'
                },
                'followers': {
                  templateUrl: 'followers.template.html',
                  controller:  'FollowersController'
                },
                'following': {
                  templateUrl: 'following.template.html',
                  controller:  'FollowingController'
                },
                'store': {
                  templateUrl: 'store.template.html',
                  controller:  'StoreController'
                }
        }
      }
    ];
  }
}());