'use strict';

describe('Controller: PageTitleCtrl', function () {

  // load the controller's module
  beforeEach(module('spaYougradeApp'));

  var PageTitleCtrl,
    scope;
  var PageTitleService;

  beforeEach(inject(function (_PageTitle_) {
    PageTitleService = _PageTitle_;
  }));
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PageTitleCtrl = $controller('PageTitleCtrl', {
      $scope: scope,
      PageTitle : PageTitleService
    });
  }));

  it('getTitle returns the value obtained from the PageTitleService getTitle method', function () {
    expect(scope.getTitle()).toBe(PageTitleService.getTitle());
    PageTitleService.setTitle('Test')
    expect(scope.getTitle()).toBe(PageTitleService.getTitle());
  });
});
