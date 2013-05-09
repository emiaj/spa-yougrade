'use strict';

angular.module('spaYougradeApp')
  .factory('QuizzTakeService', function () {
    // Service logic
    // ...
    // Public API here

    var cache = {
    };

    var quizzTakeData = function(key){
      this.key = key;
      this.answers = {};
    };

    quizzTakeData.prototype = {
      answerFor: function(question){
        return this.answers[question] = this.answers[question] || {
          question:question,
          alternative:-1
        };
      }
    };

    return {
      dataFor: function (key) {
        return cache[key] = cache[key] || new quizzTakeData(key);
      }
    };
  });
