'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var MainCtrl,
    scope,
    theTitle;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      PageTitle : {
        setTitle : function(title){
          theTitle = title;
        }
      }
    });
  }));
  it('sets the page title to Home',function(){
    expect(theTitle).toBe('Home');
  });
});
