(function() {
  'use strict';
  
  angular.module('mobile-bazaar.login', []);
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile', []);
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.directives', []);
  
}());
(function() {
  'use strict';
    
  angular.module('mobile-bazaar', [
    'mobile-bazaar.profile',
    'mobile-bazaar.login',
    'ui.router',
    'ngStorage'
  ]);
   
  // Response Headers
  angular.module('mobile-bazaar')
  .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.headers.common = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      };     
  }]);    
}());
(function() {
  // Modified version of John Papa's Router Helper
  // https://github.com/johnpapa/angular-styleguide
  
  angular
    .module('mobile-bazaar')
    .provider('routerHelper', routerHelperProvider);

  routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

  function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {

      this.$get = RouterHelper;

      $locationProvider.html5Mode(false);

      RouterHelper.$inject = ['$state'];

      function RouterHelper($state) {
          var service = {
              configureStates: configureStates,
              getStates: getStates
          };

          return service;

          function configureStates(states, otherwisePath) {
              states.forEach(function(state) {
                  $stateProvider.state(state.state, state.config);
              });
              $urlRouterProvider.otherwise("login");
          }

          function getStates() { return $state.get(); }
      }
  }
}());
(function() {
  "use strict";
  
  angular.module('mobile-bazaar')
    .factory('tokenInterceptor', tokenInterceptor);
       
    tokenInterceptor.$inject = ['$sessionStorage'];
  
    function tokenInterceptor($sessionStorage) {  
      return {
          request: function(config) {
              if (!config.headers.Authorization){
                config.headers.Authorization = $sessionStorage.token || '';
              }
              return config;
          },
          response: function(response) {
            console.log('In Response');
            console.log(response.headers('Authorization'));
            if(response.headers('Authorization')) {
              $sessionStorage.token = response.headers('Authorization');
            }
            return response;
          }
      };
  }
  
  angular.module('mobile-bazaar')
    .config(['$httpProvider', function($httpProvider) {  
      $httpProvider.interceptors.push('tokenInterceptor');
  }]);
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.login')
  .controller('LoginController', LoginController);
  
  LoginController.$inject = ['LoginService'];
  
  function LoginController(LoginService) {
    var vm = this;
    vm.credentials = {
      username: '',
      password: ''
    };
    vm.loginSuccess = true;
    
    vm.login = getLogin;
    vm.loginErrorMsg = getErrorMsg;
    vm.isLoginError = isLoginError;
    
    function getErrorMsg() {
      return LoginService.getErrorMsg();
    }
    
    function getLogin(credentials) {
      LoginService.Login(credentials);
    }
    
    function isLoginError() {
      return LoginService.isLoginError();
    }
  }
}());
(function() {
  'use strict';
  angular
    .module('mobile-bazaar.login')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'login',
        config: {
          url: '/login',
          controller: 'LoginController',
          controllerAs: "login",
          templateUrl: 'views/login.template.html'
        }
      }
    ];
  }
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.login')
  .service('LoginService', LoginService);
  
  LoginService.$inject = ['$http', '$state'];
  
  function LoginService($http, $state) {
    var login = true;
    var APIURL = 'http://localhost:28469/api/login';
    var loginError = false;
    var loginErrorMsg = '';

    return {
      getErrorMsg: getErrorMsg,
      isLoginError: isLoginError,
      Login: Login    
    };
    
    function getErrorMsg() {
      return loginErrorMsg;
    }
    
    function isLoginError() {
      return loginError;
    }
    
    function Login(credentials) {
      $http.get(APIURL, 
               {headers : {'Authorization': 'Basic ' + 
                btoa(credentials.username + ':' + credentials.password)}})
      .then(function(res) {
        $state.go('profile');
        loginError = false;
        loginErrorMsg = '';
      }) 
      .catch(function(err) {
        //log
        loginError = true;
        loginErrorMsg = err.data.error.msg || 'Auth Failed';
      });
    }
    
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile')
  .controller('ProfileController', ProfileController);
  
  ProfileController.$inject = ['ProfileService'];
  
  function ProfileController(ProfileService) {
    var vm = this;
    
    vm.guid = getGUID;
    vm.website = getWebsite;
    
    vm.profile = getProfile;
    
    init();
    
    function init() {
      ProfileService.setProfile();
    }
    
    function getGUID() {
      return ProfileService.getGUID();
    }
           
    function getProfile() {
      return ProfileService.getProfile();
    }
            
    function getWebsite() {
      return ProfileService.getWebsite();
    }
        
     return vm;
  }
  
}());
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
          templateUrl: 'views/profile.template.html'
        }
      }
    ];
  }
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile')
  .service('ProfileService', ProfileService);
  
  ProfileService.$inject = ['$http'];
  
  function ProfileService($http) {
    var APIURL = 'http://localhost:28469/api/profile';
    var profile = {};
    
    
    return {
      getGUID: getGUID,    
      getProfile: getProfile,
      getWebsite: getWebsite,
      setProfile: setProfile    
    };
    
    function getGUID() {
      return profile.guid;
    }    
        
    function getProfile() {
      return profile;
    }    
    
    function getWebsite() {
      return profile.website || 'No Website Defined';
    }
    
    function setProfile() {
      $http.get(APIURL)
      .then(function(res) {
        console.log(res);  
        profile = res.data.profile || {};
      })
      .catch(function(err){
        console.log(err);
      });
    }
    
  }
  
}());
(function() {
  'use strict';
  
  angular
    .module('mobile-bazaar.directives')
    .directive('homeTile', homeTile);

  function homeTile() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/homeTile.template.html',
      scope: {
          tiledata: '='
      },
      controller: DirectiveController,
      controllerAs: 'vm',
      //bindToController: true // Use to bind to outer scope
    };

    return directive;
  }

  function DirectiveController() {
    var vm = this;
    
  }
  
}());