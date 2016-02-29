(function() {
  "use strict";
  
  angular.module('mobile-bazaar.mocks')
  .run(mockAPI)
  
  mockAPI.$inject = ['$httpBackend'];
  
  function mockAPI($httpBackend) {
  
    var mockFollowers = {
    "followers": [
          {
            "avatar_hash": "43e0b057e37f34fdc6f8f421af0875c63a20e321", 
            "guid": "53328edb89afa8a653b4fa062f0cb255aa4a1e50", 
            "handle": "@chrispacia", 
            "name": "Chris Pacia", 
            "nsfw": false
          }, 
          {
            "avatar_hash": "27c221cd1b99a0feed173dc52ae9239e175176e3", 
            "guid": "2a7a579ca9a43a1b3d8338546c95196c5ef46170", 
            "handle": "@drwasho", 
            "name": "drwasho", 
            "nsfw": false
          }
        ]
      }
    
    var mockFollowing = {
        "following": [
        {
          "avatar_hash": "0ad0516a91bbd9147e1f23ccb5f3310181d924ed", 
          "guid": "f9ea0b394c58e14c75e8a754ae721ad8bb0cf850", 
          "handle": "", 
          "name": "SamTest", 
          "nsfw": false
        }, 
        {
          "avatar_hash": "23aeab637fc55e8b9d73dfba28ab111a53261f46", 
          "guid": "b1a4a8b4b7e934c7f8b119a671044c90a7513968", 
          "handle": "@seed1", 
          "name": "OpenBazaar Seed Server", 
          "nsfw": false
        }
      ]
    }
    
    
    var mockProfile = {
      "profile": {
        "website": "", 
        "about": "drwasho's store", 
        "guid": "375ead0967e63b6cec49f28d3be8731b20f081db", 
        "vendor": true, 
        "name": "drwasho", 
        "text_color": 16777215, 
        "social_accounts": {}, 
        "header_hash": "7de0c4aab5929ad7c413175ec9dd2ae1476e19b9", 
        "encryption_key": "0374e542b2faa53d40b43f36c722d9f40cbf40dd11da3afb6508010a8b228126", 
        "secondary_color": 3243448, 
        "moderator": true, 
        "moderator_list": [
            ""
        ], 
        "pgp_key": "", 
        "nsfw": false, 
        "location": "UNITED_STATES", 
        "avatar_hash": "", 
        "handle": "", 
        "primary_color": 551582, 
        "background_color": 407379, 
        "email": ""
        }
      }
    
    $httpBackend.whenGET('http://localhost:28469/api/login').respond(function(){
      return [200, {success: true}, {"token": "testToken"}];
    })
            
    $httpBackend.whenGET('http://localhost:28469/api/followers').respond(function(){
      return [200, mockFollowers, {}];
    })   
         
    $httpBackend.whenGET('http://localhost:28469/api/following').respond(function(){
      return [200, mockFollowing, {}];
    })   
    
    $httpBackend.whenGET('http://localhost:28469/api/profile').respond(function(){
      return [200, mockProfile, {}];
    })
    
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();

  }
  
  
}());