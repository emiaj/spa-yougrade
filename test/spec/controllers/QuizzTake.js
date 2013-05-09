'use strict';

describe('Controller: QuizzTakeCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var QuizzTakeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizzTakeCtrl = $controller('QuizzTakeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
