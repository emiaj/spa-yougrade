'use strict';

angular.module('spaYougradeApp')
  .factory('QuizService', function ($q,$http) {
    // Service logic
    // ...
    // Public API here
    return {
      getByLang: function (lang) {
        var deferred = $q.defer();
        $http
        .jsonp('http://localhost:8080/quizzes/' + lang + '?callback=JSON_CALLBACK')
        .success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
      },
      getById: function(id){
        var deferred = $q.defer();
        $http
        .jsonp('http://localhost:8080/quizzes/' + id + '?callback=JSON_CALLBACK')
        .success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
      },
      answersFor: function(quizId){
        quizId=quizId;
        return [
          {
            question:0,
            alternative:2
          },
          {
            question:1,
            alternative:1
          },
          {
            question:2,
            alternative:3
          },
          {
            question:3,
            alternative:0
          }
        ];
      }
    };
  });
