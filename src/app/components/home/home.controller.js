(function () {
  'use strict';

  angular
    .module('crossquiz')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController($state, $window, $mdMedia, $cookies, urlUtil) {
    console.log("HOME");
    var homeCtrl = this;
    homeCtrl.user = $window.localStorage['userName'];
    homeCtrl.versionNumber = urlUtil.VERSION_NUMBER;
    homeCtrl.currentTitle = currentTitle;
    homeCtrl.isStateHome = isStateHome;
    homeCtrl.menuActive = menuActive;
    homeCtrl.isDashboard = isDashboard;
    homeCtrl.openMenu = openMenu;

    angular.element('body').css({'background-color': '#f2f2f2'});

    function openMenu($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    }

    function isDashboard() {
      return $state.is('home.dashboard') && $mdMedia('(min-width: 1700px)');
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
  }
})();
