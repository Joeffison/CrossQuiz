(function () {
  'use strict';

  angular
    .module('crossquiz')
    .controller('QuizTakeController', QuizTakeController);

  /* @ngInject */
  function QuizTakeController(quizPrepService) {
    var quizTakeCtrl = this;
    quizTakeCtrl.quiz = quizPrepService;
    quizTakeCtrl.question = {number: 1, question: quizTakeCtrl.quiz.questions[0], answerSelected: 0};
    quizTakeCtrl.onAnswer = onAnswer;

    function onAnswer() {
      if(quizTakeCtrl.quiz.questions.length !== quizTakeCtrl.question.number) {
        quizTakeCtrl.question.question = quizTakeCtrl.quiz.questions[quizTakeCtrl.question.number++];
        quizTakeCtrl.question.answerSelected = 0;
      }
    }
  }
})();
