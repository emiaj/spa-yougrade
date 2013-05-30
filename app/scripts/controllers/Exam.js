'use strict';

angular.module('spaYougradeApp')
  .controller('ExamCtrl', function ($scope, $routeParams,ModuleInfoService,QuizService,ExamService) {
    $scope.quizId = $routeParams.quizId;
    $scope.examId = $routeParams.examId;
    var questionNumber = parseInt($routeParams.questionId,10);
    var questionIndex = questionNumber-1;
    $scope.nextQuestion = questionNumber+1;
    $scope.previousQuestion = questionNumber-1;
    $scope.hasPrevious = questionNumber>1;
    $scope.exam = ExamService.dataFor($scope.examId);
    $scope.answer = $scope.exam.answerFor(questionIndex);
    QuizService.getById($routeParams.quizId)
    .then(function(data){
        $scope.quiz = data;
        $scope.question = data.questions[questionIndex];
        $scope.hasNext = questionNumber < data.questions.length;
        $scope.isLast = questionNumber === data.questions.length;
        ModuleInfoService.moduleTitle = data.header.title;
        ModuleInfoService.moduleDescription = data.header.description;
    });
  });
