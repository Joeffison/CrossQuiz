(function () {
  'use strict';

  angular
    .module('crossquiz')
    .controller('QuizListController', QuizListController);

  /* @ngInject */
  function QuizListController(quizPrepService) {
    var quizListCtrl = this;
    quizListCtrl.list = quizPrepService;
  }
})();
