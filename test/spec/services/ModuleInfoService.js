'use strict';

describe('Service: ModuleInfoService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var ModuleInfoService;
  beforeEach(inject(function (_ModuleInfoService_) {
    ModuleInfoService = _ModuleInfoService_;
  }));

  it('by default moduleTitle is empty', function () {
    expect(ModuleInfoService.moduleTitle).toBe('');
  });

  it('by default moduleDescription is empty', function () {
    expect(ModuleInfoService.moduleDescription).toBe('');
  });

});
