'use strict';

angular.module('spaYougradeApp')
  .factory('QuizLanguageService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      availableLanguages: function () {
        return [
          {
            name:'en',
            title:'English'
          },
          {
            name:'es',
            title:'Español'
          }

        ];
      }
    };
  });
