'use strict';

describe('Controller: ModuleInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var ModuleInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModuleInfoCtrl = $controller('ModuleInfoCtrl', {
      $scope: scope,
      ModuleInfoService: {
        moduleTitle : 'Foo',
        moduleDescription : 'Bar'
      }
    });
  }));

  it('getModuleTitle returns the title from the injected service', function () {
    expect(scope.getModuleTitle()).toBe('Foo');
  });
  
  it('getModuleDescription returns the description from the injected service', function () {
    expect(scope.getModuleDescription()).toBe('Bar');
  });

});
