'use strict';

angular.module('spaYougradeApp')
  .factory('QuizLanguagesService', function ($q,$http,ApiEndpointService) {
    // Service logic
    // ...
    // Public API here
    return {
      availableLanguages: function () {
        var deferred = $q.defer();
        $http
        .jsonp(ApiEndpointService.urlFor('languages/list?callback=JSON_CALLBACK'))
        .success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
      }
    };
  });
