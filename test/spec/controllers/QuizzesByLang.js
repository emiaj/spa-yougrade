'use strict';

describe('Controller: QuizzesByLangCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var QuizzesByLangCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizzesByLangCtrl = $controller('QuizzesByLangCtrl', {
      $scope: scope
    });
  }));
});
