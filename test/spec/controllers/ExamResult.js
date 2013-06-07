'use strict';

describe('Controller: ExamResultCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var ExamResultCtrl,
    scope,
    routeParams,
    ExamGradingService,
    QuizService,
    RandomStringService,
    ModuleInfoService,
    theQuiz,
    theGrade,
    theRetakeExamId;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    routeParams = {
      quizId : 8,
      examId: 'abcde'
    };
    theQuiz = {
      header : {
        title:'The Quiz Name',
        description:'The Quiz Description'
      }
    };
    QuizService = {
      getById: function(id){
        var deferred = $q.defer();

        if(id===routeParams.quizId){
          deferred.resolve(theQuiz);
        }
        else{
          deferred.resolve(null);
        }
        return deferred.promise;
      }
    };
    theGrade = {
      questions:10,
      correct:4
    };
    ExamGradingService = {
      evaluate: function(quizId,examId){
        var deferred = $q.defer();
        if(quizId === routeParams.quizId && 
          examId === routeParams.examId){
          deferred.resolve(theGrade);
        }
        else{
          deferred.resolve(null);
        }
        return deferred.promise;
      }
    };
    theRetakeExamId='Zsd45';
    RandomStringService = {
      getValue : function(count){
        if(count==5){
          return theRetakeExamId;
        }
        return null;
      }
    };
    ModuleInfoService = {
    };
    ExamResultCtrl = $controller('ExamResultCtrl', {
      $scope: scope,
      $routeParams : routeParams,
      ExamGradingService: ExamGradingService,
      QuizService: QuizService,
      RandomStringService: RandomStringService,
      ModuleInfoService: ModuleInfoService
    });
    $rootScope.$apply();
  }));

  it('sets the quiz id', function () {
    expect(scope.quizId).toBe(routeParams.quizId);
  });
  it('sets the exam id',function(){
    expect(scope.examId).toBe(routeParams.examId);
  });
  it('sets the quiz object',function(){
    expect(scope.quiz).toBe(theQuiz);
  });
  it('sets the grade object',function(){
    expect(scope.grade).toBe(theGrade);
  });
  it('sets the correct percentage',function(){
    expect(scope.correctPercentage).toBe(40);
  });
  it('sets the incorrect percentage',function(){
    expect(scope.incorrectPercentage).toBe(60);
  });
  it('sets the retake exam id',function(){
    expect(scope.retakeExamId).toBe(theRetakeExamId);
  })
  it('sets the module title as the name of the quiz',function(){
    expect(ModuleInfoService.moduleTitle).toBe(theQuiz.header.title);
  });
  it('sets the module description as the description of the quiz',function(){
    expect(ModuleInfoService.moduleDescription).toBe(theQuiz.header.description);
  });
});
