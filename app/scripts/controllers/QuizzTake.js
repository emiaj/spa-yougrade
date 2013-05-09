'use strict';

angular.module('spaYougradeApp')
  .controller('QuizzTakeCtrl', function ($scope, $routeParams,ModuleInfoService,QuizzService,QuizzTakeService) {
    $scope.quizzId = $routeParams.quizzId;
    $scope.quizzTakeId = $routeParams.quizzTakeId;
    $scope.questionId = parseInt($routeParams.questionId,10);
    $scope.quizz = QuizzService.getById($routeParams.quizzId);
    $scope.question = $scope.quizz.questions[$scope.questionId-1];
    $scope.hasPrevious = $scope.questionId>1 && $scope.quizz.questions.length > 1;
    $scope.hasNext = $scope.questionId < $scope.quizz.questions.length;
    $scope.isLast = $scope.questionId === $scope.quizz.questions.length;
    $scope.quizzTake = QuizzTakeService.dataFor($scope.quizzTakeId);
    $scope.answer = $scope.quizzTake.answerFor($scope.questionId-1);

    ModuleInfoService.moduleTitle = $scope.quizz.name;
    ModuleInfoService.moduleDescription = $scope.quizz.description;
  });
