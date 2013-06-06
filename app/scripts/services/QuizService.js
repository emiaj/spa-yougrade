'use strict';

angular.module('spayougradeapp')
  .factory('quizservice', function ($q,$http) {
    // service logic
    // ...
    // public api here
    return {
      getbylang: function (lang) {
        var deferred = $q.defer();
        $http
        .jsonp('http://localhost:8080/quizzes/' + lang + '?callback=json_callback')
        .success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
      },
      getbyid: function(id){
        var deferred = $q.defer();
        $http
        .jsonp('http://localhost:8080/quizzes/' + id + '?callback=json_callback')
        .success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
      }
    };
  });
