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
                name: 'about',
                isTab: true,
              },
              'following@profile': {
                templateUrl: 'views/following.template.html',
                controller: 'FollowingController',
                controllerAs: 'following',
                name: 'following',
                isTab: true,
              },
              'followers@profile': {
                templateUrl: 'views/followers.template.html',
                controller: 'FollowersController',
                controllerAs: 'followers',
                name: 'followers',
                isTab: true,
              },
              'store@profile': {
                templateUrl: 'views/store.template.html',
                controller: 'StoreController',
                controllerAs: 'store',
                name: 'store',
                isTab: true,
              },
              'settings@profile': {
                templateUrl: 'views/settings.template.html',
                controller: 'SettingsController',
                controllerAs: 'settings',
                name: 'settings',
                isTab: true,
              },
          }          
          }
      }];
    }
}());