'use strict';

angular.module('spaYougradeApp', ['ui.compat'])
  .config(function($stateProvider, $routeProvider, $urlRouterProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider.when('/','/').otherwise('/');
  });
