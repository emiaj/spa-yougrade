'use strict';

angular.module('spaYougradeApp')
  .controller('ExamCtrl', function ($scope, $routeParams,ModuleInfoService,QuizService,ExamService) {
    $scope.quizId = $routeParams.quizId;
    $scope.examId = $routeParams.examId;
    var questionNumber = parseInt($routeParams.questionId,10);
    var questionIndex = questionNumber-1;
    $scope.nextQuestion = questionNumber+1;
    $scope.previousQuestion = questionNumber-1;
    $scope.quiz = QuizService.getById($routeParams.quizId);
    $scope.question = $scope.quiz.questions[questionIndex];
    $scope.hasPrevious = questionNumber>1;
    $scope.hasNext = questionNumber < $scope.quiz.questions.length;
    $scope.isLast = questionNumber === $scope.quiz.questions.length;
    $scope.exam = ExamService.dataFor($scope.examId);
    $scope.answer = $scope.exam.answerFor(questionIndex);

    ModuleInfoService.moduleTitle = $scope.quiz.name;
    ModuleInfoService.moduleDescription = $scope.quiz.description;
  });
