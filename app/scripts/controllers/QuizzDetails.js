'use strict';

angular.module('spaYougradeApp')
  .controller('QuizzDetailsCtrl', function ($scope, $routeParams,QuizzService,ModuleInfoService) {
  	$scope.quizzId = $routeParams.quizzId;
  	$scope.quizz = QuizzService.getById($routeParams.quizzId)
  	ModuleInfoService.moduleTitle = $scope.quizz.name;
  	ModuleInfoService.moduleDescription = $scope.quizz.description;
  });
