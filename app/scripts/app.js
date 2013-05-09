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
      .when('/quiz/:quizId', {
        templateUrl: 'views/QuizDetails.html',
        controller: 'QuizDetailsCtrl'
      })
      .when('/exam/:examId/:quizId/:questionId', {
        templateUrl: 'views/Exam.html',
        controller: 'ExamCtrl'
      })
      .when('/results/:examId/:quizId', {
        templateUrl: 'views/ExamResult.html',
        controller: 'ExamResultCtrl'
      });
    $urlRouterProvider.when('/','/').otherwise('/');
  });