angular.module('crossquiz').component('cqHeader', {
  templateUrl: 'app/shared/directives/cq-header/cq-header.html',
  controller: CqHeaderController,
  controllerAs: 'cqHeaderCtrl'
});

/* @ngInject */
function CqHeaderController($state, authService) {
  var cqHeaderCtrl = this;
  cqHeaderCtrl.loggedIn = authService.getUsername;
  cqHeaderCtrl.login = login;
  cqHeaderCtrl.register = register;
  cqHeaderCtrl.logout = authService.logout();

  function login() {
    $state.go('home.login', {action: 'LOGIN'})
  }

  function register() {
    $state.go('home.login', {action: 'REGISTER'})
  }

}
