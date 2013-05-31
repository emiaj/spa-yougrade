'use strict';

angular.module('spaYougradeApp')
  .controller('ExamCtrl', function ($scope, $routeParams,ModuleInfoService,QuizService,ExamService) {
    $scope.quizId = $routeParams.quizId;
    $scope.examId = $routeParams.examId;
    var questionNumber = parseInt($routeParams.questionId,10);    
    $scope.nextQuestion = questionNumber+1;
    $scope.previousQuestion = questionNumber-1;
    $scope.hasPrevious = questionNumber>1;
    ExamService.dataFor($scope.examId).then(function(data){
        $scope.exam = data;
        $scope.answer = data.answerFor(questionNumber);
        $scope.$watch("answer.alternative",function(newv,oldv){
            if(newv != oldv){
                ExamService.updateAnswer($scope.examId,questionNumber,newv);
            }
        });

    });    
    QuizService.getById($routeParams.quizId)
    .then(function(data){
        $scope.quiz = data;
        $scope.question = data.questions[questionNumber-1];
        $scope.hasNext = questionNumber < data.questions.length;
        $scope.isLast = questionNumber === data.questions.length;
        ModuleInfoService.moduleTitle = data.header.title;
        ModuleInfoService.moduleDescription = data.header.description;
    });
  });
