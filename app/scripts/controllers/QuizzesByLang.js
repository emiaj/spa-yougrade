'use strict';

angular.module('spaYougradeApp')
  .controller('QuizzesByLangCtrl', function ($scope,QuizzService) {
  	$scope.quizzes = [];
    $scope.init = function(lang){
    	$scope.quizzes = QuizzService.getByLang(lang);
    };
  });
