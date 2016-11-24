(function () {
  'use strict';

  angular.module('crossquiz')
    .run(run);

  /* @ngInject */
  function run($rootScope, $state, $http, $window, $cookies) {
    $rootScope.$on('$stateChangeStart', stateChangeStart);

    function stateChangeStart(event, toState) {
      if (toState.name === 'home') {
        event.preventDefault();
        $state.go('home');
      }
    }
  }
})();
