'use strict';

angular.module('spaYougradeApp')
  .controller('QuizLanguagesCtrl', function ($scope,QuizLanguagesService) {
    QuizLanguagesService.availableLanguages()
    .then(function(data){
	    $scope.languages = data;
    });
  });
