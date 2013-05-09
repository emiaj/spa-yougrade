'use strict';

describe('Service: RandomStringService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var RandomStringService;
  beforeEach(inject(function (_RandomStringService_) {
    RandomStringService = _RandomStringService_;
  }));

  it('should do something', function () {
    expect(!!RandomStringService).toBe(true);
  });

});
