'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var LoginCtrl,
    scope,
    ModuleInfoService,
    thePageTitle;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModuleInfoService = {};
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      PageTitle : {
        setTitle: function(title){
          thePageTitle=title;
        }
      },
      ModuleInfoService : ModuleInfoService
    });
  }));
  it('sets the page title',function(){
    expect(thePageTitle).toBe('Login');
  });
  it('sets the module title',function(){
    expect(ModuleInfoService.moduleTitle).toBe('Login');
  });
  it('sets the module description',function(){
    expect(ModuleInfoService.moduleDescription).toBe('Enter your credentials below to access the system');
  });
});
