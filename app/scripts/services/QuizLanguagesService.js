'use strict';

angular.module('spaYougradeApp')
  .factory('QuizLanguagesService', function ($q,$http) {
    // Service logic
    // ...
    // Public API here
    return {
      availableLanguages: function () {
        var deferred = $q.defer();
        $http
        .jsonp('http://localhost:8080/languages/list?callback=JSON_CALLBACK')
        .success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
      }
    };
  });
