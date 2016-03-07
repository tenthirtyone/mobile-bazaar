(function() {
  'use strict';
  angular
    .module('mobile-bazaar.listing')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'listing',
        config: {
          url: '/listing',
          controller: 'ListingController',
          controllerAs: "listing",
          templateUrl: 'views/listing.template.html'
        }
      }
    ];
  }
}());