(function () {
  'use strict';

  angular
    .module('crossquiz')
    .config(configRoutes);

  /* @ngInject */
  function configRoutes($stateProvider) {
    $stateProvider
      .state('home.quiz', {
        url: '/quiz',
        data: {
          requireLogin: true,
          title: [{title: 'QUIZ_ID', sref: '#'}]
        },
        params: {
          urlFallback: '',
          quizId: 3
        },
        views: {
          '': {
            templateUrl: 'app/components/quiz/quiz.take.html',
            controller: 'QuizTakeController',
            controllerAs: 'quizTakeCtrl',
            resolve: {
              quizPrepService: quizPrepService
            }
          }
        }
      });
  }

  /* @ngInject */
  function quizPrepService($stateParams, quizService) {
    return quizService.get($stateParams.quizId);
  }
})();
