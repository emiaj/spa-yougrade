'use strict';

describe('Service: SystemInfo', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var SystemInfo;
  beforeEach(inject(function (_SystemInfo_) {
    SystemInfo = _SystemInfo_;
  }));

  it('name is YouGrade by default', function () {
    expect(SystemInfo.name).toBe('YouGrade');
  }); 
});
