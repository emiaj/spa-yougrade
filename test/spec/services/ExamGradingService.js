'use strict';

describe('Service: ExamGradingService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));


  var theQuizId,
    theExamId,
    rootScope,
    ExamGradingService,
    expectedEvalResults,
    data,
    httpBackend;

  // mock dependencies
  beforeEach(inject(function (ApiSettingsService, $httpBackend) {
    theQuizId = 7;
    theExamId = 'abc34';
    data = {
      quiz: theQuizId,
      exam: theExamId};
    expectedEvalResults = {
      approved: true,
      questions: 4,
      correct: 3,
      incorrect: 1};
    ApiSettingsService.baseUrl = '/';
    httpBackend = $httpBackend;
    httpBackend
      .expectPOST('/exams/eval', data)
      .respond(201, expectedEvalResults);
  }));

  // instantiate service
  beforeEach(inject(function (_ExamGradingService_) {
    ExamGradingService = _ExamGradingService_;
  }));

  it('returns the evaluation from the service endpoint', function () {
    var theEvalResults;
    ExamGradingService
      .evaluate(theQuizId, theExamId)
      .then(function (result) {
        theEvalResults = result;
      });
    httpBackend.flush();
    expect(theEvalResults).toBe(expectedEvalResults);
  });
});
