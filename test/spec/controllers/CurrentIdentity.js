'use strict';

describe('Controller: CurrentIdentityCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var CurrentIdentityCtrl,
    scope,
    theCurrentIdentity;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    theCurrentIdentity = {
      name:'Test'
    };
    CurrentIdentityCtrl = $controller('CurrentIdentityCtrl', {
      $scope: scope,
      SecurityContext:{
        currentIdentity: function(){
          return theCurrentIdentity;
        }
      },
      SystemInfo: {
        name:'Foo'
      }
    });
  }));

  it('sets the current identity',function(){
    expect(scope.currentIdentity).toBe(theCurrentIdentity);
  });
  it('sets the scope system name',function(){
    expect(scope.name).toBe('Foo');
  });
});
