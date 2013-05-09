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
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    routeParams = {
      quizId : 8,
      examId: 'abcde'
    };
    theQuiz = {
      name:'The Quiz Name',
      description:'The Quiz Description'
    };
    QuizService = {
      getById: function(id){
        if(id===routeParams.quizId){
          return theQuiz;
        }
        return null;
      }
    };
    theGrade = {
      questions:10,
      correct:4
    };
    ExamGradingService = {
      evaluate: function(quizId,examId){
        if(quizId === routeParams.quizId && 
          examId === routeParams.examId){
          return theGrade;
        }
        return null;
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
    expect(ModuleInfoService.moduleTitle).toBe(theQuiz.name);
  });
  it('sets the module description as the description of the quiz',function(){
    expect(ModuleInfoService.moduleDescription).toBe(theQuiz.description);
  });
});
