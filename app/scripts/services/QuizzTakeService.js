'use strict';

angular.module('spaYougradeApp')
  .factory('QuizzTakeService', function () {
    // Service logic
    // ...
    // Public API here

    var cache = {
    };

    var QuizzTakeData = function(key){
      this.key = key;
      this.answers = {};
    };

    QuizzTakeData.prototype = {
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
          data = new QuizzTakeData(key);
          cache[key] = data;
        }
        return data;
      }
    };
  });
