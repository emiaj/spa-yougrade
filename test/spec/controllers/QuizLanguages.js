'use strict';

describe('Controller: QuizLanguagesCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var QuizLanguagesCtrl,
    scope,
    theLanguages;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    theLanguages = [
      {
        name:'en'
      },
      {
        name:'jp'
      }
    ];
    QuizLanguagesCtrl = $controller('QuizLanguagesCtrl', {
      $scope: scope,
      QuizLanguagesService: {
        availableLanguages: function(){
          return theLanguages;
        }
      }
    });
  }));

  it('sets the available languages', function () {
    expect(scope.languages).toBe(theLanguages);
  });
});
