'use strict';

angular.module('spaYougradeApp')
  .controller('LoginCtrl', function ($scope,PageTitle,ModuleInfoService) {
    PageTitle.setTitle('Login');
    ModuleInfoService.moduleTitle = 'Login';
    ModuleInfoService.moduleDescription = 'Enter your credentials below to access the system';
  });
