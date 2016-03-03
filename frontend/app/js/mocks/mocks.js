(function() {
  "use strict";
  
  angular.module('mobile-bazaar.mocks')
  .run(mockAPI)
  
  mockAPI.$inject = ['$httpBackend'];
  
  function mockAPI($httpBackend) {
  
    var mockContracts = {
      "vendor_offer": {
        "signature": "d6dc2a4b44b143971a328d5fc8509913fe2446f2a701257091c53449fa1a6f0f4e2f901c3e27b0d61aaaadd38d481aa39bb158313cbc15357ff4656d265cbb0e",
        "listing": {
          "item": {
            "category": "star wars",
            "description": "Squad goals",
            "price_per_unit": {
              "bitcoin": "0.001"
            },
            "title": "Jedi Squad",
            "process_time": "3",
            "image_hashes": [
              "a26e08897885013fd930ade07772225fd98a267e"
            ],
            "nsfw": false,
            "keywords": [
              "star wars",
              "jedi"
            ]
          },
          "moderators": [
            {
              "fee": "10.0%",
              "name": "BDunbar",
              "blockchain_id": "@bdunbar",
              "avatar": "38f4cae21cef9805e085fb6d21b8108030b4f612",
              "short_description": "",
              "pubkeys": {
                "encryption": {
                  "key": "399e53e5f0908a33c0857f561d154f2fbafc09c7ae7d6b74da3b40d049c14457",
                  "signature": "074bb93c0af20ddbe2568f94050429a3c5ca4b3661fa3c5a1c810b5128ed945db0ca9d399bb3f2baec1322e9ff92251d7b21392c5c06f87d4877fa11d606e708"
                },
                "signing": {
                  "key": "6a8cbd64631272644503a3dea3f63bd1ef6148de25d1cc0fec38671dfa9c6f1c",
                  "signature": "70f5e67522bfa6ba56b402e9ea71c50f15c2caf5058fc565c9959ad1427e275c9e5bce18b98444734973c54f02a226d17092a95ac7f1a56e2287c7a996193606"
                },
                "bitcoin": {
                  "key": "024febe65c1b237c37394ebfd2d5abc2af564c4a0ca8435a6b3045a4a3e6e7e8d4",
                  "signature": "3efdc208101d0aee0973ec6f75620ed25fb0873a69299aeee81740172aa7e50a0d68fbfe4bc57874a94d7c8e095ef519ee3d974ad880b9f7f62f0aaac1e7140e"
                }
              },
              "guid": "fa5025f8ac9fcba532cff9608d1c080a84e2f7a1"
            }
          ],
          "id": {
            "pubkeys": {
              "encryption": "9e55643cd11bd1d01915f2de03ea11c80138a2bb4e0b9e04a6e924ca7c6ac76c",
              "guid": "318bff260a7cc2133ef59fac40e23d5f1361e111eae78f31f8be154cc5cd88af",
              "bitcoin": "0284c670567cd6555c2d5519b74aaade7af3ca2781c6b79db78091b9f0c53939cc"
            },
            "guid": "a9c6bb758d97b74520008a9f38710f946750516a",
            "blockchain_id": "@drwasho"
          },
          "metadata": {
            "category": "service",
            "version": "0.1",
            "category_sub": "fixed price",
            "expiry": "2016-01-25T08:12 UTC"
          }
        }
      }
    }
    
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
        "website": "http://www.openbazaar.org", 
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
    
    var mockSales = [{
      "status": 0,
      "buyer": "@chrispacia",
      "description": "Tolstoy's epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed. \r\n\r\nThe prodigious cast of characters, seem to act and move as if connected by threads of destiny as the novel relentlessly questions ideas of free will, fate, and providence. Yet Tolstoy's portrayal of marital relations and scenes of domesticity is as truthful and poignant as the grand themes that underlie them.",
      "title": "Handbag",
      "order_id": "549c844c08048166ed4ac9d44d9bf8916c7ce9cb",
      "timestamp": 1449414448.939755,
      "btc_total": 0.002,
      "contract_type": "physical good",
      "thumbnail_hash": "cf344e4dc1eb9c38aff103c18116cd15754ad30f"
    }]
    
    var mockSettings = {
      "blocked_guids": [""],
      "refund_address": "n2eMqTT929pb1RDNuqEnxdaLau1rxy3efi",
      "refund_policy": "No refund policy",
      "notifications": true,
      "seed": "e4ed7abcd397c3adf9f13a8dd31db6c99dbf48315e1c6d75196318c0bb7bfedd",
      "shipping_addresses": ["[{\"name\":\"Washington Sanchez\",\"street\":\"1060 W Addison\",\"city\":\"Chicago\",\"state\":\"Illinois\",\"postal_code\":\"60613\",\"country\":\"UNITED_STATES\",\"displayCountry\":\"United States of America (The)\"}]"],
      "terms_conditions": "No terms or conditions",
      "language": "en",
      "ssl": true,
      "country": "UNITED_STATES",
      "time_zone": "10",
      "libbitcoin_server": "",
      "currency_code": "BTC"
    }
    
    
    $httpBackend.whenGET('http://localhost:28469/api/contracts').respond(function(){
      return [200, {success: true}, {"token": "testToken"}];
    })
           
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
    
    $httpBackend.whenGET('http://localhost:28469/api/settings').respond(function(){
      return [200, mockProfile, {}];
    })
    
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();

  }
  
  
}());