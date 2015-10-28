(function() {
angular.module('main', [
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html'
    })
    .state('members', {
      url: '/members',
      templateUrl: 'pages/members.html'
    })
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'pages/schedule.html'
    })

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
     enabled: true
    });
  });
})();