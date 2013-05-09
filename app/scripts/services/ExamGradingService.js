'use strict';

angular.module('spaYougradeApp')
  .factory('ExamGradingService', function (ExamService,QuizService) {
    // Service logic
    // ...
    // Public API here
    return {
      evaluate: function (quizId,quizTakeId) {
        var exam = ExamService.dataFor(quizTakeId);
        var quizAnswers = QuizService.answersFor(quizId);
        var grade = {
          questions : quizAnswers.length,
          correct : 0,
          incorrect: 0,
          approved : function(){
            return this.correct>this.incorrect;
          }
        };
        for (var i = 0; i < quizAnswers.length; i++) {
          var answer = quizAnswers[i];
          var userAnswer = exam.answerFor(answer.question);
          if(answer.alternative === parseInt(userAnswer.alternative,10)){
            grade.correct+=1;
          }
          else{
            grade.incorrect+=1;
          }
        }
        return grade;
      }
    };
  });
