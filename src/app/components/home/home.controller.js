(function () {
  'use strict';

  angular
    .module('crossquiz')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController($state, $window, $cookies, urlUtil) {
    console.log("it is HOME");
    var homeCtrl = this;
    homeCtrl.user = $window.localStorage['userName'];
    homeCtrl.versionNumber = urlUtil.VERSION_NUMBER;
    homeCtrl.currentTitle = currentTitle;
    homeCtrl.isStateHome = isStateHome;
    homeCtrl.menuActive = menuActive;
    homeCtrl.isDashboard = isDashboard;
    homeCtrl.openMenu = openMenu;

    var loginActions = {'LOGIN': 'Login', 'REGISTER': 'Register'};
    homeCtrl.loginAction = loginActions.REGISTER;
    homeCtrl.login = login;
    homeCtrl.register = register;
    homeCtrl.email = '';
    homeCtrl.password = '';
    homeCtrl.onLoginAction = onLoginAction;

    function openMenu($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    }

    function isDashboard() {
      return $state.is('home.dashboard');
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

    function isStateHome() {
      if ($state.current.name === 'home') {
        return true;
      }
      return false;
    }

    function login() {
      homeCtrl.loginAction = loginActions.LOGIN;
    }

    function register() {
      homeCtrl.loginAction = loginActions.REGISTER;
    }

    function onLoginAction(){
      console.log(homeCtrl.email);
      console.log(homeCtrl.password);
    }
  }
})();
