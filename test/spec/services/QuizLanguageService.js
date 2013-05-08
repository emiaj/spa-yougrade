'use strict';

describe('Service: QuizLanguageService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var QuizLanguageService;
  beforeEach(inject(function (_QuizLanguageService_) {
    QuizLanguageService = _QuizLanguageService_;
  }));

  it('should do something', function () {
    expect(!!QuizLanguageService).toBe(true);
  });

});
