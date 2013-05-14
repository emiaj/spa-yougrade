'use strict';

angular.module('spaYougradeApp')
  .factory('QuizLanguagesService', function () {
    // Service logic
    // ...
    // Public API here
    return {
      availableLanguages: function () {
        return [
          {
            name:'en',
            title:'English'
          }
        ];
      }
    };
  });
