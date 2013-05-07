'use strict';

describe('Controller: CurrentIdentityCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var CurrentIdentityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrentIdentityCtrl = $controller('CurrentIdentityCtrl', {
      $scope: scope
    });
  }));
});
