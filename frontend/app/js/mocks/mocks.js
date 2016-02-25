(function() {
  "use strict";
  
  angular.module('mobile-bazaar.mocks')
  .run(mockAPI)
  
  mockAPI.$inject = ['$httpBackend'];
  
  function mockAPI($httpBackend) {
        
    $httpBackend.whenGET('http://localhost:28469/api/login').respond(function(){
      return [200, {success: true}, {}];
    })
            
    $httpBackend.whenGET('http://localhost:28469/api/login').respond(function(){
      return [200, {success: true}, {}];
    })
    
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();

  }
  
  
}());