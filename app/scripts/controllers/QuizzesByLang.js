'use strict';

angular.module('spaYougradeApp')
  .controller('QuizzesByLangCtrl', function ($scope,QuizService) {
	$scope.quizzes = [];
	$scope.init = function(lang){
		$scope.quizzes = QuizService.getByLang(lang);
	};
});
