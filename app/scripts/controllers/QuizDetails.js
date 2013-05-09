'use strict';

angular.module('spaYougradeApp')
  .controller('QuizDetailsCtrl', function ($scope, $routeParams,QuizService,ModuleInfoService,RandomStringService) {
	$scope.quizId = $routeParams.quizId;
	$scope.quiz = QuizService.getById($routeParams.quizId);
	$scope.examKey = RandomStringService.getValue(5);
	ModuleInfoService.moduleTitle = $scope.quiz.name;
	ModuleInfoService.moduleDescription = $scope.quiz.description;
});
