'use strict';

describe('Service: QuizzGradingService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var QuizzGradingService;
  beforeEach(inject(function (_QuizzGradingService_) {
    QuizzGradingService = _QuizzGradingService_;
  }));

  it('should do something', function () {
    expect(!!QuizzGradingService).toBe(true);
  });

});
