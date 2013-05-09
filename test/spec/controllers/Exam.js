'use strict';

describe('Controller: ExamCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var ExamCtrl,
    scope,
    routeParams,
    ModuleInfoService,
    QuizService,
    ExamService,
    theQuiz,
    theExam,
    theAnswer;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    routeParams = {
      examId : 'ab12A',
      quizId : 7,
      questionId : 2
    };
    ModuleInfoService = {};
    theQuiz = {
      name: 'The Quiz',
      description: 'The Quiz Description',
      questions: [
        {name:'q1'},
        {name:'q2'},
        {name:'q3'},
        {name:'q4'},
        {name:'q5'}
      ]
    };
    QuizService = {
      getById: function(quizId){
        if(quizId === routeParams.quizId){
          return theQuiz;
        }
        return null;
      }
    };
    theAnswer = {
      questionId: routeParams.questionId,
      alternative: 5
    };
    theExam = {
      answerFor: function(questionId){
        if(questionId === routeParams.questionId-1){
          return theAnswer;
        }
        return null;
      }
    };
    ExamService = {
      dataFor: function(examId){
        if(examId === routeParams.examId){
          return theExam;
        }
        return null;
      }
    };
    setControllerUnderTest($controller);
  }));
  function setControllerUnderTest($controller){
    ExamCtrl = $controller('ExamCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      ModuleInfoService:ModuleInfoService,
      QuizService:QuizService,
      ExamService:ExamService
    });
  }
  it('sets the quizId',function(){
    expect(scope.quizId).toBe(routeParams.quizId);
  });
  it('sets the examId',function(){
    expect(scope.examId).toBe(routeParams.examId);
  });
  it('sets the nextQuestion',function(){
    expect(scope.nextQuestion).toBe(routeParams.questionId+1);
  });
  it('sets the previousQuestion',function(){
    expect(scope.previousQuestion).toBe(routeParams.questionId-1);
  });
  it('sets the quiz object',function(){
    expect(scope.quiz).toBe(theQuiz);
  });
  it('sets the question',function(){
    expect(scope.question).toBe(theQuiz.questions[routeParams.questionId-1]);
  });
  it('sets the exam',function(){
    expect(scope.exam).toBe(theExam);
  });
  it('sets the answer',function(){
    expect(scope.answer).toBe(theAnswer);
  });
  it('sets the module title',function(){
    expect(ModuleInfoService.moduleTitle).toBe(theQuiz.name);
  });
  it('sets the module description',function(){
    expect(ModuleInfoService.moduleDescription).toBe(theQuiz.description);
  });
  it('sets the hasPrevious field',function(){
    expect(scope.hasPrevious).not.toBeUndefined();
  });
  it('sets the hasNext field',function(){
    expect(scope.hasNext).not.toBeUndefined();
  });
  it('sets the isLast field',function(){
    expect(scope.isLast).not.toBeUndefined();
  });
  describe('hasPrevious field',function(){
    describe('when the questionId is greater than 1',function(){
      it('is true',function(){
        expect(scope.hasPrevious).toBe(true);
      });
    });
    describe('when the questionId is equal to 1',function(){
      beforeEach(inject(function($controller){
        routeParams.questionId = 1;
        setControllerUnderTest($controller);
      }));
      it('is false',function(){
        expect(scope.hasPrevious).toBe(false);
      });
    });
    describe('when the questionId is lower than 1',function(){
      beforeEach(inject(function($controller){
        routeParams.questionId = 0;
        setControllerUnderTest($controller);
      }));
      it('is false',function(){
        expect(scope.hasPrevious).toBe(false);
      });
    });
  });
  describe('hasNext field',function(){
    describe('when the questionId is lower than the number of questions',function(){
      it('is true',function(){
        expect(scope.hasNext).toBe(true);
      });
    });
    describe('when the questionId is equal to the number of questions',function(){
      beforeEach(inject(function($controller){
        routeParams.questionId = theQuiz.questions.length;
        setControllerUnderTest($controller);
      }));
      it('is false',function(){
        expect(scope.hasNext).toBe(false);
      });
    });
    describe('when the questionId is greater than the number of questions',function(){
      beforeEach(inject(function($controller){
        routeParams.questionId = theQuiz.questions.length+1;
        setControllerUnderTest($controller);
      }));
      it('is false',function(){
        expect(scope.hasNext).toBe(false);
      });
    });
  });
  describe('isLast field',function(){
    describe('when the questionId is equal to the number of questions',function(){
      beforeEach(inject(function($controller){
        routeParams.questionId = theQuiz.questions.length;
        setControllerUnderTest($controller);
      }));
      it('is true',function(){
        expect(scope.isLast).toBe(true);
      });
    });
    describe('when the questionId is lower than the number of questions',function(){
      beforeEach(inject(function($controller){
        routeParams.questionId = theQuiz.questions.length-1;
        setControllerUnderTest($controller);
      }));
      it('is false',function(){
        expect(scope.isLast).toBe(false);
      });
    });
    describe('when the questionId is greater than the number of questions',function(){
      beforeEach(inject(function($controller){
        routeParams.questionId = theQuiz.questions.length+1;
        setControllerUnderTest($controller);
      }));
      it('is false',function(){
        expect(scope.isLast).toBe(false);
      });
    });
  });
});
