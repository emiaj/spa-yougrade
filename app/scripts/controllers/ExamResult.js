'use strict';

angular.module('spaYougradeApp')
  .controller('ExamResultCtrl', function ($scope,$routeParams,ExamGradingService,QuizService,RandomStringService,ModuleInfoService) {
    $scope.quizId = $routeParams.quizId;
    $scope.examId = $routeParams.examId;
    $scope.evaluating = true;
    ExamGradingService.evaluate($scope.quizId,$scope.examId)
    .then(function(data){
        $scope.grade = data;
        $scope.correctPercentage = Math.round(100*($scope.grade.correct/$scope.grade.questions));
        $scope.incorrectPercentage = 100 - $scope.correctPercentage;
        $scope.evaluating = false;
    });
    
    $scope.retakeExamId = RandomStringService.getValue(5);

    QuizService.getById($scope.quizId).then(function(data){
        $scope.quiz = data;
        ModuleInfoService.moduleTitle = data.header.title;
        ModuleInfoService.moduleDescription = data.header.description;
    });
  });
