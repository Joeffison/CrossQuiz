(function () {
  'use strict';

  angular
    .module('crossquiz')
    .controller('QuizTakeController', QuizTakeController);

  /* @ngInject */
  function QuizTakeController(quizPrepService) {
    var quizTakeCtrl = this;
    quizTakeCtrl.quiz = quizPrepService;
    quizTakeCtrl.question = {number: 1, question: quizTakeCtrl.quiz.questions[5]};

    function onAnswer() {
    }

    function onNextQuestion() {
    }
  }
})();
