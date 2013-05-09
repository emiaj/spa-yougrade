'use strict';

angular.module('spaYougradeApp', ['ui.compat','ui.bootstrap'])
  .config(function($routeProvider, $urlRouterProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	    .when('/login', {
	      templateUrl: 'views/login.html',
	      controller: 'LoginCtrl'
	    })
      .when('/logout', {
        controller: 'LogOutCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/quizz/:quizzId', {
        templateUrl: 'views/QuizzDetails.html',
        controller: 'QuizzDetailsCtrl'
      });
    $urlRouterProvider.when('/','/').otherwise('/');
  });