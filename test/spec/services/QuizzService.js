'use strict';

describe('Service: QuizzService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var QuizzService;
  beforeEach(inject(function (_QuizzService_) {
    QuizzService = _QuizzService_;
  }));

  it('should do something', function () {
    expect(!!QuizzService).toBe(true);
  });

});
