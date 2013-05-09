'use strict';

angular.module('spaYougradeApp')
  .controller('QuizzResultCtrl', function ($scope,$routeParams,QuizzGradingService,QuizzService,RandomStringService,ModuleInfoService) {
  	$scope.quizzId = $routeParams.quizzId;
    $scope.quizzTakeId = $routeParams.quizzTakeId;
    $scope.quizz = QuizzService.getById($scope.quizzId);
    $scope.grade = QuizzGradingService.evaluate($scope.quizzId,$scope.quizzTakeId);
	$scope.correctPercentage = Math.round(100*($scope.grade.correct/$scope.grade.questions));
	$scope.incorrectPercentage = 100 - $scope.correctPercentage;
	$scope.retakeQuizzId = RandomStringService.getValue(5);

    ModuleInfoService.moduleTitle = $scope.quizz.name;
    ModuleInfoService.moduleDescription = $scope.quizz.description;
  });
