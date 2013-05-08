'use strict';

angular.module('spaYougradeApp')
  .controller('QuizLanguagesCtrl', function ($scope,QuizLanguageService) {
    $scope.panes = QuizLanguageService.availableLanguages();
  });
