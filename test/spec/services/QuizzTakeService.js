'use strict';

describe('Service: QuizzTakeService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var QuizzTakeService;
  beforeEach(inject(function (_QuizzTakeService_) {
    QuizzTakeService = _QuizzTakeService_;
  }));

  it('should do something', function () {
    expect(!!QuizzTakeService).toBe(true);
  });

});
