'use strict';

describe('Service: ExamGradingService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var ExamGradingService;
  beforeEach(inject(function (_ExamGradingService_) {
    ExamGradingService = _ExamGradingService_;
  }));

  it('should do something', function () {
    expect(!!ExamGradingService).toBe(true);
  });

});
