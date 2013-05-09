'use strict';

angular.module('spaYougradeApp')
  .controller('ExamResultCtrl', function ($scope,$routeParams,ExamGradingService,QuizService,RandomStringService,ModuleInfoService) {
    $scope.quizId = $routeParams.quizId;
    $scope.examId = $routeParams.examId;
    $scope.quiz = QuizService.getById($scope.quizId);
    $scope.grade = ExamGradingService.evaluate($scope.quizId,$scope.examId);
    $scope.correctPercentage = Math.round(100*($scope.grade.correct/$scope.grade.questions));
    $scope.incorrectPercentage = 100 - $scope.correctPercentage;
    $scope.retakeExamId = RandomStringService.getValue(5);

    ModuleInfoService.moduleTitle = $scope.quiz.name;
    ModuleInfoService.moduleDescription = $scope.quiz.description;
  });
