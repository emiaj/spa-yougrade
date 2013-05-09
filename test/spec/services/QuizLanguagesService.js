'use strict';

describe('Service: QuizLanguagesService', function () {

  // load the service's module
  beforeEach(module('spaYougradeApp'));

  // instantiate service
  var QuizLanguagesService;
  beforeEach(inject(function (_QuizLanguagesService_) {
    QuizLanguagesService = _QuizLanguagesService_;
  }));

  it('should do something', function () {
    expect(!!QuizLanguagesService).toBe(true);
  });

});
