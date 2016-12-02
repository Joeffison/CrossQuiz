(function () {
  'use strict';

  angular.module('crossquiz')
    .service('quizService', quizService);

  /* @ngInject */
  function quizService(resourceFactory) {
    var service = {
      get: get,
      list: list
    };

    return service;

    function get(quizId) {
      var params;

      if (angular.isArray(quizId)) {
        params = {quizes: quizId.toString()};
      } else {
        params = {id: quizId};
      }
      return resourceFactory.quizResource.get(params).$promise.finally(success);
    }

    function list(page, orderBy, asc, quizes) {
      var params = {};

      if (quizes !== '') {
        params.quizes = quizes;
      }

      return resourceFactory.quizResource.list(params).$promise;
    }

    function success(data) {
      return data;
    }
  }
})();
