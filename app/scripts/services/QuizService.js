'use strict';

angular.module('spaYougradeApp')
  .factory('QuizService', function ($q,$http, ApiEndpointService) {
    // Service logic
    // ...
    // Public API here
    return {
      getByLang: function (lang) {
        var deferred = $q.defer();
        $http
        .jsonp(ApiEndpointService('quizzes/' + lang + '?callback=JSON_CALLBACK'))
        .success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
      },
      getById: function(id){
        var deferred = $q.defer();
        $http
        .jsonp(ApiEndpointService('quizzes/' + id + '?callback=JSON_CALLBACK'))
        .success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
      }
    };
  });
