'use strict';

describe('Service: PageTitle', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var PageTitle;
  var SystemInfo;
  beforeEach(inject(function (_PageTitle_) {
    PageTitle = _PageTitle_;
  }));
  beforeEach(inject(function (_SystemInfo_) {
    SystemInfo = _SystemInfo_;
  }));

  it('returns the system name as title if no title has been set', function () {
    expect(PageTitle.getTitle()).toBe(SystemInfo.name);
  });

  it('returns the system name with the title as suffix if the title has been set',function(){
    PageTitle.setTitle("Home");
    expect(PageTitle.getTitle()).toBe(SystemInfo.name + ':::Home');
  });
});
