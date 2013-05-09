'use strict';

describe('Service: ExamService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var ExamService;
  beforeEach(inject(function (_ExamService_) {
    ExamService = _ExamService_;
  }));

  it('should do something', function () {
    expect(!!ExamService).toBe(true);
  });

});
