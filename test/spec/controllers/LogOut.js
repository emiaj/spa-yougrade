'use strict';

describe('Controller: LogOutCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var LogOutCtrl,
    scope,
    theRoute;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogOutCtrl = $controller('LogOutCtrl', {
      $scope: scope,
      $location: {
        path: function(route){
          theRoute=route;
        }
      }
    });
  }));

  it('redirects to the login route', function () {
    expect(theRoute).toBe('/login');
  });
});
