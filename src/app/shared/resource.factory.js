(function () {
  'use strict';

  angular.module('crossquiz').factory('resourceFactory', resourceFactory);

  /* @ngInject */
  function resourceFactory($resource, $q, $log, urlUtil) {
    var factory = {
      quizResource: quizResource()
    };

    return factory;

    function quizResource() {
      return getResource(urlUtil.QUIZ);
    }

    function getResource(url) {
      return $resource(url, {id: '@_id'}, getConfigResource());
    }

    function getConfigResource() {
      return {
        save: {
          method: 'POST',
          interceptor: {
            responseError: interceptorError
          }
        },
        update: {
          method: 'PUT',
          interceptor: {
            responseError: interceptorError
          }
        },
        list: {
          method: 'GET',
          isArray: true,
          interceptor: {
            responseError: interceptorError
          }
        },
        get: {
          method: 'GET',
          interceptor: {
            responseError: interceptorError
          }
        }
      };
    }

    function interceptorError(response) {
      return $q.reject(response);
    }
  }
})();
