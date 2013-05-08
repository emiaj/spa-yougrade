'use strict';

angular.module('spaYougradeApp')
  .controller('QuizzLanguagesCtrl', function ($scope,QuizzLanguageService) {
    $scope.languages = QuizzLanguageService.availableLanguages();
  });
