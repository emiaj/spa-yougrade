'use strict';

describe('Service: SecurityContext', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var SecurityContext;
  beforeEach(inject(function (_SecurityContext_) {
    SecurityContext = _SecurityContext_;
  }));

  it('should do something', function () {
    expect(!!SecurityContext).toBe(true);
  });

});
