'use strict';

angular.module('spaYougradeApp')
  .factory('ExamGradingService', function (ExamService,QuizService,$q) {
    // Service logic
    // ...
    // Public API here
    return {
      evaluate: function (quizId,examId) {
        var deferred = $q.defer();
        var exam = ExamService.dataFor(examId);
        var quizAnswers = QuizService.answersFor(quizId);
        var grade = {
          questions : quizAnswers.length,
          correct : 0,
          incorrect: 0,
          approved : function(){
            return this.correct>this.incorrect;
          }
        };
        exam.then(function(data){
          for (var i = 0; i < quizAnswers.length; i++) {
            var answer = quizAnswers[i];
            var userAnswer = data.answerFor(answer.question);
            if(answer.alternative === parseInt(userAnswer.alternative,10)){
              grade.correct+=1;
            }
            else{
              grade.incorrect+=1;
            }
          }
          deferred.resolve(grade);
        });
        
        return deferred.promise;
      }
    };
  });
