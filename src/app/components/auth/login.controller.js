(function () {
  'use strict';

  angular
    .module('crossquiz')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController($state, $window, $cookies, $stateParams, urlUtil, quizService, authService) {
    var loginCtrl = this;
    loginCtrl.user = $window.localStorage.userName;
    loginCtrl.versionNumber = urlUtil.VERSION_NUMBER;
    loginCtrl.currentTitle = currentTitle;
    loginCtrl.menuActive = menuActive;
    loginCtrl.openMenu = openMenu;

    var loginActions = {LOGIN: 'Login', REGISTER: 'Register'};
    loginCtrl.loginAction = loginActions.REGISTER;
    loginCtrl.login = login;
    loginCtrl.register = register;
    loginCtrl.email = '';
    loginCtrl.password = '';
    loginCtrl.onLoginAction = onLoginAction;

    loginCtrl.loginAction = loginActions[$stateParams.action];

    function openMenu($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    }

    function menuActive(menu) {
      if ($state.current.name.indexOf(menu) !== -1) {
        return true;
      }
      return false;
    }

    function currentTitle() {
      return $state.current.data.title;
    }

    function login() {
      loginCtrl.loginAction = loginActions[$stateParams.action];
    }

    function register() {
      loginCtrl.loginAction = loginActions.REGISTER;
    }

    function onLoginAction() {
      authService.login(loginCtrl.email, loginCtrl.password);
      quizService.list().then(success);

      function success(data) {
        $state.go('home.quiz', {quizId: 1});
        loginCtrl.quizes = data;
        return loginCtrl.quizes;
      }
    }
  }
})();
