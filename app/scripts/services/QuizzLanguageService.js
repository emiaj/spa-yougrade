'use strict';

angular.module('spaYougradeApp')
  .factory('QuizzLanguageService', function () {
    // Service logic
    // ...
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
