(function () {
  'use strict';

  angular
    .module('crossquiz')
    .config(configRoutes);

  function configRoutes($stateProvider) {
    $stateProvider
      .state('home', {
        url: '',
        data: {
          requireLogin: true,
          title: [{title: 'HOME_ID', sref: '#'}]
        },
        views: {
          '': {
            templateUrl: 'app/components/home/home.html'
          }
        }
      });
  }
})();
