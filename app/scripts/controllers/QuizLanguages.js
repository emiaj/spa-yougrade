'use strict';

angular.module('spaYougradeApp')
  .controller('QuizLanguagesCtrl', function ($scope,QuizLanguagesService) {
    $scope.languages = QuizLanguagesService.availableLanguages();
  });
