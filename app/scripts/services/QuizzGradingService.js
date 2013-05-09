'use strict';

angular.module('spaYougradeApp')
  .factory('QuizzGradingService', function (QuizzTakeService,QuizzService) {
    // Service logic
    // ...
    // Public API here
    return {
      evaluate: function (quizzId,quizzTakeId) {
        var quizzTake = QuizzTakeService.dataFor(quizzTakeId);
        var quizzAnswers = QuizzService.answersFor(quizzId);
        var grade = {
          questions : quizzAnswers.length,
          correct : 0,
          incorrect: 0,
          approved : function(){
            return this.correct>this.incorrect;
          }
        };
        for (var i = 0; i < quizzAnswers.length; i++) {
          var answer = quizzAnswers[i];
          var userAnswer = quizzTake.answerFor(answer.question);
          if(answer.alternative == parseInt(userAnswer.alternative)){
            grade.correct+=1;
          }
          else{
            grade.incorrect+=1;
          }
        };
        return grade;
      }
    };
  });
