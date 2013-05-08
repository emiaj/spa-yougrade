'use strict';

describe('Controller: QuizLanguagesCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var QuizLanguagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizLanguagesCtrl = $controller('QuizLanguagesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
