'use strict';

describe('Service: ExamService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var ExamService,
    httpBackend;


  // mock dependencies
  beforeEach(inject(function (ApiSettingsService, $httpBackend) {
    ApiSettingsService.baseUrl = '/';
    httpBackend = $httpBackend;
    httpBackend
      .expectJSONP('/exams/data/foo?callback=JSON_CALLBACK')
      .respond(201, {
        key:'foo',
        answers:[{
          question:1,
          alternative:4
        },{
          question:2,
          alternative:3
        }]
      });
  }));

  beforeEach(inject(function (_ExamService_) {
    ExamService = _ExamService_;
  }));
  it('exam data key',function(){
    ExamService.dataFor('foo').then(function(data){
      expect(data.key).toBe('foo');
    });
    httpBackend.flush();
  });
  it('returns the same answer object for a given question',function(){
    ExamService.dataFor('foo').then(function(data){
      expect(data.answerFor(3)).toBe(data.answerFor(3));
      expect(data.answerFor(1)).toBe(data.answerFor(1));
    });
    httpBackend.flush();
  })
  it('question number',function(){
    ExamService.dataFor('foo').then(function(data){
      expect(data.answerFor(3).question).toBe(3);
    });
    httpBackend.flush();
  })
  it('alternative number by default is -1',function(){
    ExamService.dataFor('foo').then(function(data){
      expect(data.answerFor(3).alternative).toBe(-1);
    });
    httpBackend.flush();
  })
  it('alternative number matches the one from the endpoint',function(){
    ExamService.dataFor('foo').then(function(data){
      expect(data.answerFor(1).alternative).toBe(4);
      expect(data.answerFor(2).alternative).toBe(3);
    });
    httpBackend.flush();

  })
});
