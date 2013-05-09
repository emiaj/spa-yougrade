'use strict';

describe('Controller: QuizzDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var QuizzDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizzDetailsCtrl = $controller('QuizzDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
