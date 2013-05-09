'use strict';

angular.module('spaYougradeApp')
  .controller('QuizzDetailsCtrl', function ($scope, $routeParams,QuizzService,ModuleInfoService,RandomStringService) {
  	$scope.quizzId = $routeParams.quizzId;
  	$scope.quizz = QuizzService.getById($routeParams.quizzId)
  	$scope.quizzTakeKey = RandomStringService.getValue(5);
  	ModuleInfoService.moduleTitle = $scope.quizz.name;
  	ModuleInfoService.moduleDescription = $scope.quizz.description;
  });
