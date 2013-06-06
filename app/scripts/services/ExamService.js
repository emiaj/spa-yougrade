'use strict';

angular.module('spaYougradeApp')
  .factory('ExamService', function ($q,$http,ApiEndpointService) {
    // Service logic
    // ...
    // Public API here

    var ExamData = function(data){
      this.key = data.key;
      this.answers = data.answers;
    };

    ExamData.prototype = {
      answerFor: function(question){
        var answer;
        for (var i = 0; i < this.answers.length; i++) {
          answer = this.answers[i];
          if(answer.question === question){
            break;
          }
          else{
            answer = null;
          }
        }
        if(!answer){
          answer = {question:question};
        }
        if(!answer.alternative){
          answer.alternative = -1;
        }
        return answer;
      }
    };

    return {
      dataFor: function (key) {
        var deferred = $q.defer();
        $http
        .jsonp(ApiEndpointService('exams/data/' + key + '?callback=JSON_CALLBACK'))
        .success(function(data){
          deferred.resolve(new ExamData(data));
        });
        return deferred.promise;
      },
      updateAnswer:function(key,question,alternative){
        $http
        .post(ApiEndpointService('exams/data/' + key),{
          question:question,
          alternative:parseInt(alternative,10)
        });
      }
    };
  });
