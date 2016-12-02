(function () {
  'use strict';

  angular
    .module('crossquiz')
    .constant('urlUtil', urlUtil());

  function urlUtil() {
    var URL = 'http://localhost:8000/domain/';

    return {
      VERSION_NUMBER: 'CQ_1.0',
      API: URL,
      QUIZ: URL + 'quiz/:id/'
    };
  }
})();
