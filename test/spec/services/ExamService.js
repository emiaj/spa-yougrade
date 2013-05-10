'use strict';

describe('Service: ExamService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var ExamService;
  beforeEach(inject(function (_ExamService_) {
    ExamService = _ExamService_;
  }));
  it('returns the same data for a given exam key', function () {
    expect(ExamService.dataFor('foo')).not.toBeUndefined();
    expect(ExamService.dataFor('foo')).toBe(ExamService.dataFor('foo'));
  });
  it('exam data key',function(){
    expect(ExamService.dataFor('foo').key).toBe('foo');
  });
  it('returns the same answer object for a given question',function(){
    expect(ExamService.dataFor('foo').answerFor(3))
    .toBe(ExamService.dataFor('foo').answerFor(3));
  })
  it('question number',function(){
    expect(ExamService.dataFor('foo').answerFor(3).question).toBe(3);
  })
  it('alternative number by default is -1',function(){
    expect(ExamService.dataFor('foo').answerFor(3).alternative).toBe(-1);
  })
});
