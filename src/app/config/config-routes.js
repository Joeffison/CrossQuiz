(function () {
  'use strict';

  angular
    .module('crossquiz')
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        data: {
          requireLogin: false
        },
        onEnter: verifyAuthed

      });
  }

  /* @ngInject */
  function verifyAuthed($state, authService) {
    if (authService.isAuthed()) {
      $state.go('home');
    }
  }
})();
