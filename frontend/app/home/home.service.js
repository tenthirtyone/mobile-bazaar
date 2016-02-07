(function() {
  'use strict';
  
  angular.module('angular-template.home')
  .service('HomeService', HomeService);
  
  HomeService.$inject = ['$http'];
  
  function HomeService($http) {
    var login = true;
    
    var homeData = [
      {title: 'News Item #1', desc: 'Data retrieved from a service and passed to a directive', date: '12/12/12'},
      {title: 'Title 2', desc: 'Description 2', date: '12/12/13'},
      {title: 'Title 3', desc: 'Description 3', date: '12/12/14'}
    ];
    
    return {
      getHomeData: getHomeData    
    };
    
    function getHomeData() {
      return homeData;
    }
    
  }
  
}());