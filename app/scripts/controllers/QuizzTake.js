'use strict';

angular.module('spaYougradeApp')
  .controller('QuizzTakeCtrl', function ($scope, $routeParams,QuizzService,ModuleInfoService) {
  	$scope.quizzId = $routeParams.quizzId;
  	$scope.questionId = parseInt($routeParams.questionId);
  	$scope.quizz = QuizzService.getById($routeParams.quizzId)
  	$scope.question = $scope.quizz.questions[$scope.questionId-1];
  	$scope.hasPrevious = $scope.questionId>1 && $scope.quizz.questions.length > 1;
  	$scope.hasNext = $scope.questionId < $scope.quizz.questions.length;
  	$scope.isLast = $scope.questionId == $scope.quizz.questions.length;
  	ModuleInfoService.moduleTitle = $scope.quizz.name;
  	ModuleInfoService.moduleDescription = $scope.quizz.description;
  });
