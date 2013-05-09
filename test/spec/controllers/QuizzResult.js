'use strict';

describe('Controller: QuizzResultCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var QuizzResultCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizzResultCtrl = $controller('QuizzResultCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
