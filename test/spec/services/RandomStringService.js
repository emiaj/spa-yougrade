'use strict';

describe('Service: RandomStringService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var RandomStringService;
  beforeEach(inject(function (_RandomStringService_) {
    RandomStringService = _RandomStringService_;
  }));

  it('returns a valid string', function () {
    expect(RandomStringService.getValue(5)).not.toBeUndefined();
  });
  it('returns a string with the specified length', function () {
    expect(RandomStringService.getValue(5).length).toBe(5);
  });
  it('returns a unique string on each call', function () {
    expect(RandomStringService.getValue(5)).not.toBe(RandomStringService.getValue(5));
  });
});
