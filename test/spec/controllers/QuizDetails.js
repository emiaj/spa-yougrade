'use strict';

describe('Controller: QuizDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var QuizDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizDetailsCtrl = $controller('QuizDetailsCtrl', {
      $scope: scope
    });
  }));
});
