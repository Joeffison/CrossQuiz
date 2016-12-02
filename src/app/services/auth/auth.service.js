(function () {
  'use strict';

  angular.module('crossquiz')
    .service('authService', authService);

  /* @ngInject */
  function authService($window, $rootScope) {
    var loggedInCookies = {jwtToken: 'jwtToken', username: 'username'};

    return {
      login: login,
      register: register,
      logout: logout,
      getUsername: getUsername,
      isLoggedIn: isLoggedIn
    };

    function login(login, password) {
      $window.localStorage[loggedInCookies.username] = login;
      return getUsername();
    }

    function register(login, password) {
      return login(login, password);
    }

    function logout() {
      for(var property in loggedInCookies) {
        if(loggedInCookies.hasOwnProperty(property)){
          $window.localStorage.removeItem(loggedInCookies[property]);
        }
      }
      $rootScope.$broadcast('logout');
    }

    function getUsername() {
      return $window.localStorage[loggedInCookies.username];
    }

    function isLoggedIn() {
      return angular.isEmpty(getUsername());
    }
  }
})();
