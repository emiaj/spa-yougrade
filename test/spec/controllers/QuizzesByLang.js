'use strict';

describe('Controller: QuizzesByLangCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var QuizzesByLangCtrl,
    scope,
    QuizService,
    theQuizzes,
    theLang;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    theLang = 'en';
    QuizService = {
      getByLang: function(lang){
        if(lang===theLang){
          return theQuizzes;
        }
        return null;
      }
    };
    theQuizzes = [
      {name:'q1'},
      {name:'q2'}
    ]

    QuizzesByLangCtrl = $controller('QuizzesByLangCtrl', {
      $scope: scope,
      QuizService: QuizService
    });
  }));
  it('sets the list of quizzes as empty before calling to init',function(){
    expect(scope.quizzes).toEqual([]);
  });
  it('sets the list of quizzes by lang after calling to init',function(){
    scope.init(theLang);
    expect(scope.quizzes).toBe(theQuizzes);
  });
});
