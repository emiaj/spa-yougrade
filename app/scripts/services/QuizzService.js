'use strict';

angular.module('spaYougradeApp')
  .factory('QuizzService', function () {
    // Service logic
    // ...
    // Public API here
    return {
      getByLang: function (lang) {
        var quizzes = [];
        for (var i = 1; i < 5; i++) {
          quizzes.push({
            id: i+lang,
            title:'[' + lang + ']' + 'Learning English with "The Big Bang Theory"#' + i,
            description:'Show your knowledge on the English language using videos from The Big Bang Theory',
            thumbnail:'http://img.youtube.com/vi/fRaUVp5DfRk/0.jpg',
            url:'#/quizz/' + lang + '/' + i
          });
        };
        return quizzes;
      }
    };
  });
