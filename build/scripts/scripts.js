(function() {
  'use strict';
  
  angular.module('mobile-bazaar.login', []);
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile', [
    'mobile-bazaar.about',
    'mobile-bazaar.followers',
    'mobile-bazaar.following',
    'mobile-bazaar.settings',
    'mobile-bazaar.store'
  ]);
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.directives', []);
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about', []);
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.followers', []);
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.following', []);
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.settings', []);
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.store', []);
  
}());
(function() {
  'use strict';
    
  angular.module('mobile-bazaar', [
    'mobile-bazaar.directives',
    'mobile-bazaar.followers',
    'mobile-bazaar.following',
    'mobile-bazaar.profile',
    'mobile-bazaar.login',
    'ngMaterial',
    'ui.router',
    'ngStorage'
  ]);
   
  // Response Headers
  angular.module('mobile-bazaar')
  .config(['$httpProvider', '$mdThemingProvider', function($httpProvider, $mdThemingProvider) {
    $httpProvider.defaults.headers.common = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };     
    var customPrimary = {
        '50': '#4a94cc',
        '100': '#3788c5',
        '200': '#327ab1',
        '300': '#2c6d9d',
        '400': '#275f89',
        '500': '215175',
        '600': '#1b4361',
        '700': '#16354d',
        '800': '#102839',
        '900': '#0b1a25',
        'A100': '#5ea0d1',
        'A200': '#71acd7',
        'A400': '#85b7dd',
        'A700': '#050c12'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

      var customAccent = {
          '50': '#e6edf4',
          '100': '#d4e0ec',
          '200': '#c3d3e4',
          '300': '#b1c6dc',
          '400': '#a0b9d4',
          '500': '8eaccc',
          '600': '#7c9fc4',
          '700': '#6b92bc',
          '800': '#5985b4',
          '900': '#4c79a8',
          'A100': '#f7f9fc',
          'A200': '#ffffff',
          'A400': '#ffffff',
          'A700': '#446c97'
      };
      $mdThemingProvider
          .definePalette('customAccent', 
                          customAccent);

      var customWarn = {
          '50': '#e2a29c',
          '100': '#dc9088',
          '200': '#d67e74',
          '300': '#d06b61',
          '400': '#ca594d',
          '500': 'c4473a',
          '600': '#b04034',
          '700': '#9d392e',
          '800': '#893229',
          '900': '#752a23',
          'A100': '#e7b5b0',
          'A200': '#edc7c3',
          'A400': '#f3dad7',
          'A700': '#62231d'
      };
      $mdThemingProvider
          .definePalette('customWarn', 
                          customWarn);

      var customBackground = {
        '50': '#737373',
        '100': '#666666',
        '200': '#595959',
        '300': '#4d4d4d',
        '400': '#404040',
        '500': '#333',
        '600': '#262626',
        '700': '#1a1a1a',
        '800': '#0d0d0d',
        '900': '#000000',
        'A100': '#808080',
        'A200': '#8c8c8c',
        'A400': '#999999',
        'A700': '#000000'
    };
      $mdThemingProvider
          .definePalette('customBackground', 
                          customBackground);

     $mdThemingProvider.theme('default')
         .primaryPalette('customPrimary')
         
    
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
       
    tokenInterceptor.$inject = ['$localStorage'];
  
    function tokenInterceptor($localStorage) {  
      return {
          request: function(config) {
              if (!config.headers.Authorization){
                config.headers.Authorization = $localStorage.token || '';
              }
              return config;
          },
          response: function(response) {
            if(response.headers('Authorization')) {
              $localStorage.token = response.headers('Authorization');
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
  
  ProfileController.$inject = ['ProfileService', 'routerHelper'];
  
  function ProfileController(ProfileService, routerHelper) {
    var vm = this;

    vm.tabs = [];
       
    init();
    
    function init() {
      angular.forEach(routerHelper.getStates(), function(state) {
        if (state.name === 'profile') {
          angular.forEach(state.views, function(view) {
            if (view.isTab) {
              this.push(view);
            }
          }, vm.tabs);
        }
      });       
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
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.profile')
  .service('ProfileService', ProfileService);
  
  ProfileService.$inject = ['$http'];
  
  function ProfileService($http) {
    
  }
  
}());
(function() {
  'use strict';
  
  angular
    .module('mobile-bazaar.directives')
    .directive('obNavbar', obNavbar);

  function obNavbar() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/obNavbar.template.html',
      scope: {
          navbardata: '='
      },
      controller: DirectiveController,
      controllerAs: 'vm'
    };

    return directive;
  }

  function DirectiveController() {
    var vm = this;
    
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .controller('AboutController', AboutController);
  
  AboutController.$inject = ['AboutService'];
  
  function AboutController(AboutService) {
    var vm = this;
    vm.profile = {};
    
    init();    
  
    function init() {
      return getProfile().then(function() {
        console.log('getting profile');
      });
    }
    
    function getProfile() {
        return AboutService.getProfile()
            .then(function(data) {
                vm.profile = data;
                return vm.profile;
            });
    }    
    
     return vm;
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .service('AboutService', AboutService);
  
  AboutService.$inject = ['$http'];
  
  function AboutService($http) {
    var APIURL = 'http://localhost:28469/api/profile';
    
    return { 
      getProfile: getProfile 
    };
    
    function getProfile() {
      return $http.get(APIURL)
      .then(function(res) {
        return res.data.profile;
      })
      .catch(function(err){
        console.log(err);
      });
    }        
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.followers')
  .controller('FollowersController', FollowersController);
  
  FollowersController.$inject = ['FollowersService'];
  
  function FollowersController(FollowersService) {
    var vm = this;
    vm.followers = getFollowers;
    
    init();
    
    function init() {
      FollowersService.setFollowers();
    }
    
    function getFollowers() {
      return FollowersService.getFollowers();
    }
  
     return vm;
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.followers')
  .service('FollowersService', FollowersService);
  
  FollowersService.$inject = ['$http'];
  
  function FollowersService($http) {
    var APIURL = 'http://localhost:28469/api/followers';
    var followers = {};
    
    
    return {
      getFollowers: getFollowers,
      setFollowers: setFollowers  
    };
      
    function getFollowers() {
      return following;
    }    
     
    function setFollowers() {
      $http.get(APIURL)
      .then(function(res) {
        followers = res.data.followers || {};
      })
      .catch(function(err){
        //console.log(err);
      });
    }
    
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.following')
  .controller('FollowingController', FollowingController);
  
  FollowingController.$inject = ['FollowingService'];
  
  function FollowingController(FollowingService) {
    var vm = this;
    vm.following = getFollowing;
    
    init();
    
    function init() {
      FollowingService.setFollowing();
    }
    
    function getFollowing() {
      return FollowingService.getFollowing();
    }
  
     return vm;
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.following')
  .service('FollowingService', FollowingService);
  
  FollowingService.$inject = ['$http'];
  
  function FollowingService($http) {
    var APIURL = 'http://localhost:28469/api/following';
    var following = {};
    
    
    return {
      getFollowing: getFollowing,
      setFollowing: setFollowing  
    };
      
    function getFollowing() {
      return following;
    }    
     
    function setFollowing() {
      $http.get(APIURL)
      .then(function(res) {
        following = res.data.following || {};
      })
      .catch(function(err){
        //console.log(err);
      });
    }
    
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.settings')
  .controller('SettingsController', SettingsController);
  
  SettingsController.$inject = ['SettingsService'];
  
  function SettingsController(SettingsService) {
    var vm = this;
    
    init();
    
    function init() {
      
    }
    
     return vm;
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .service('SettingsService', SettingsService);
  
  SettingsService.$inject = ['$http'];
  
  function SettingsService($http) {
    var APIURL = 'http://localhost:28469/api/profile';
    var followers = {};
    
    return {
     
    };
       
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.store')
  .controller('StoreController', StoreController);
  
  StoreController.$inject = ['StoreService'];
  
  function StoreController(StoreService) {
    var vm = this;
    
    init();
    
    function init() {
      
    }
    
     return vm;
  }
  
}());
(function() {
  'use strict';
  
  angular.module('mobile-bazaar.about')
  .service('StoreService', StoreService);
  
  StoreService.$inject = ['$http'];
  
  function StoreService($http) {
    var APIURL = 'http://localhost:28469/api/profile';
    var followers = {};
    
    return {
     
    };
       
  }
  
}());