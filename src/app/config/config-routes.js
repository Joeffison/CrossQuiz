(function () {
  'use strict';

  angular
    .module('crossquiz')
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home.login', {
        url: '/login',
        templateUrl: 'app/components/auth/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl',
        data: {
          requireLogin: false
        },
        params: {
          action: 'REGISTER'
        },
        onEnter: verifyAuthed

      });
  }

  /* @ngInject */
  function verifyAuthed($state) {
    // if (authService.isAuthed()) {
    //   $state.go('home');
    // }
  }
})();
