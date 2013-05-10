'use strict';

describe('Service: ExamGradingService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));


  var ExamGradingService,
    ExamService,
    QuizService,
    theQuizId,
    theExamId,
    theExam,
    theQuizAnswers,
    theExamAnswers,
    theEvaluation;

  // mock dependencies
  beforeEach(function(){
    theExamId = 3;
    theQuizId = 2;
    theQuizAnswers = [
      {
        question:0,
        alternative:0
      },
      {
        question:1,
        alternative:1
      },
      {
        question:2,
        alternative:2
      },
      {
        question:3,
        alternative:3
      }
    ];
    theExamAnswers = [
      {
        question:0,
        alternative:0
      },
      {
        question:1,
        alternative:1
      },
      {
        question:2,
        alternative:2
      },
      {
        question:3,
        alternative:3
      }
    ];
    theExam = {
      answerFor: function(question){
        return theExamAnswers[question];
      }
    };
    QuizService = {
      answersFor: function(quizId){
        if(quizId === theQuizId){
          return theQuizAnswers;
        }
        return null;
      }
    };
    ExamService = {
      dataFor:function(examId){
        if(examId===theExamId){
          return theExam;
        }
        return null;
      }
    };
    module(function($provide){
      $provide.value('ExamService',ExamService);
      $provide.value('QuizService',QuizService);
    });

    theEvaluation = function(){
      return ExamGradingService.evaluate(theQuizId,theExamId);
    }
  });

  // instantiate service
  beforeEach(inject(function (_ExamGradingService_) {
    ExamGradingService = _ExamGradingService_;
  }));

  it('the evaludation has the number of questions', function () {
    expect(theEvaluation().questions).toBe(theQuizAnswers.length)
  });
  describe('when the number of correct answers',function(){
    describe('is equal to the number of incorrect answers then',function(){
      beforeEach(function(){
        theExamAnswers[0].alternative = 3;
        theExamAnswers[1].alternative = 2;
      });
      it('the exam is not approved',function(){
        expect(theEvaluation().approved()).toBe(false);
      });
      it('sets the number of correct answers',function(){
        expect(theEvaluation().correct).toBe(2);
      });
      it('sets the number of incorrect answers',function(){
        expect(theEvaluation().incorrect).toBe(2);
      });
    });
    describe('is lower than the number of incorrect answers',function(){
      beforeEach(function(){
        theExamAnswers[0].alternative = 3;
        theExamAnswers[1].alternative = 2;
        theExamAnswers[2].alternative = 1;
      });
      it('the exam is not approved',function(){
        expect(theEvaluation().approved()).toBe(false);
      });
      it('sets the number of correct answers',function(){
        expect(theEvaluation().correct).toBe(1);
      });
      it('sets the number of incorrect answers',function(){
        expect(theEvaluation().incorrect).toBe(3);
      });
    });
    describe('greater than the number of incorrect answers',function(){
      beforeEach(function(){
        theExamAnswers[0].alternative = 3;
      });
      it('the exam is not approved',function(){
        expect(theEvaluation().approved()).toBe(true);
      });
      it('sets the number of correct answers',function(){
        expect(theEvaluation().correct).toBe(3);
      });
      it('sets the number of incorrect answers',function(){
        expect(theEvaluation().incorrect).toBe(1);
      });
    });
  });
});
