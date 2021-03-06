'use strict';

describe('Controller: QuizDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var QuizDetailsCtrl,
    scope,
    routeParams,
    QuizService,
    theQuiz,
    ModuleInfoService,
    theExamKey,
    RandomStringService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    routeParams = {quizId:3};
    theQuiz = {
      header: {
        title:'The Quiz Name',
        description:'The Quiz Description'
      }
    };
    QuizService = {
      getById: function(quizId){
        var deferred = $q.defer();
        if(quizId == routeParams.quizId){
          deferred.resolve(theQuiz);
        }
        else{
          deferred.resolve(null);
        }
        return deferred.promise;
      }
    };
    ModuleInfoService = {};
    theExamKey = 'a12xx';
    RandomStringService = {
      getValue: function(count){
        if(count===5){
          return theExamKey;
        }
        return null;
      }
    };
    QuizDetailsCtrl = $controller('QuizDetailsCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      QuizService: QuizService,
      ModuleInfoService: ModuleInfoService,
      RandomStringService:RandomStringService
    });
    $rootScope.$apply();
  }));
  it('sets the quizId',function(){
    expect(scope.quizId).toBe(routeParams.quizId);
  });
  it('sets the quiz object',function(){
    expect(scope.quiz).toBe(theQuiz);
  });
  it('sets the exam key',function(){
    expect(scope.examKey).toBe(theExamKey);
  });
  it('sets the module title',function(){
    expect(ModuleInfoService.moduleTitle).toBe(theQuiz.header.title);
  });
  it('sets the module description',function(){
    expect(ModuleInfoService.moduleDescription).toBe(theQuiz.header.description);
  });
});
