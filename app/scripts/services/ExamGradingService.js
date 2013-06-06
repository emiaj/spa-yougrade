'use strict';

angular.module('spaYougradeApp')
  .factory('ExamGradingService', function ($q, $http) {
    // Service logic
    // ...
    // Public API here
    return {
      evaluate: function (quizId, examId) {
        var deferred = $q.defer();
        $http
          .post('http://localhost:8080/exams/eval', {
            quiz: parseInt(quizId, 10),
            exam: examId
          })
          .success(function (data) {
            deferred.resolve(data);
          });
        return deferred.promise;
      }
    };
  });
