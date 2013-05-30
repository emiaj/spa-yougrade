'use strict';

angular.module('spaYougradeApp')
  .controller('QuizDetailsCtrl', function ($scope, $routeParams,QuizService,ModuleInfoService,RandomStringService) {
	$scope.quizId = $routeParams.quizId;
	$scope.examKey = RandomStringService.getValue(5);
	QuizService.getById($routeParams.quizId)
	.then(function(data){
		$scope.quiz = data;
		ModuleInfoService.moduleTitle = $scope.quiz.header.title;
		ModuleInfoService.moduleDescription = $scope.quiz.header.description;
	});
});
