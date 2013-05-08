'use strict';

describe('Controller: LogOutCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var LogOutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogOutCtrl = $controller('LogOutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
