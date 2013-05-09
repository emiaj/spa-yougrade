'use strict';

angular.module('spaYougradeApp')
  .controller('ExamCtrl', function ($scope, $routeParams,ModuleInfoService,QuizService,ExamService) {
    $scope.quizId = $routeParams.quizId;
    $scope.examId = $routeParams.examId;
    $scope.questionId = parseInt($routeParams.questionId,10);
    $scope.quiz = QuizService.getById($routeParams.quizId);
    $scope.question = $scope.quiz.questions[$scope.questionId-1];
    $scope.hasPrevious = $scope.questionId>1 && $scope.quiz.questions.length > 1;
    $scope.hasNext = $scope.questionId < $scope.quiz.questions.length;
    $scope.isLast = $scope.questionId === $scope.quiz.questions.length;
    $scope.exam = ExamService.dataFor($scope.examId);
    $scope.answer = $scope.exam.answerFor($scope.questionId-1);

    ModuleInfoService.moduleTitle = $scope.quiz.name;
    ModuleInfoService.moduleDescription = $scope.quiz.description;
  });
