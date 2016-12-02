(function () {
  'use strict';

  angular
    .module('crossquiz')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController($state, $window, $cookies, urlUtil) {
    var homeCtrl = this;
    homeCtrl.user = $window.localStorage.userName;
    homeCtrl.versionNumber = urlUtil.VERSION_NUMBER;
    homeCtrl.currentTitle = currentTitle;
    homeCtrl.isStateHome = isStateHome;
    homeCtrl.menuActive = menuActive;
    homeCtrl.isDashboard = isDashboard;
    homeCtrl.openMenu = openMenu;
    homeCtrl.getClassResizer = getClassResize;

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

    function getClassResize() {
      // return $mdMedia('(min-width: 1700px)') || !homeCtrl.sidenavOpen ? 'content-gt-md' : 'content-md';
      return '';
    }

  }
})();
