'use strict';

angular.module('spaYougradeApp')
  .factory('ExamService', function () {
    // Service logic
    // ...
    // Public API here

    var cache = {
    };

    var ExamData = function(key){
      this.key = key;
      this.answers = {};
    };

    ExamData.prototype = {
      answerFor: function(question){
        var answer = this.answers[question];
        if(!answer){
          answer = {
            question:question,
            alternative:-1
          };
          this.answers[question] = answer;
        }
        return answer;
      }
    };

    return {
      dataFor: function (key) {
        var data = cache[key];
        if(!data){
          data = new ExamData(key);
          cache[key] = data;
        }
        return data;
      }
    };
  });
