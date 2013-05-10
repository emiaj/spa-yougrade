'use strict';

describe('Controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var ProfileCtrl,
    scope,
    ModuleInfoService,
    thePageTitle;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModuleInfoService = {};
    ProfileCtrl = $controller('ProfileCtrl', {
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
    expect(thePageTitle).toBe('User Profile');
  });
  it('sets the module title',function(){
    expect(ModuleInfoService.moduleTitle).toBe('User Profile');
  });
  it('sets the module description',function(){
    expect(ModuleInfoService.moduleDescription).toBe('');
  });
});
