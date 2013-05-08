'use strict';

angular.module('spaYougradeApp')
  .controller('MainCtrl', function ($scope,PageTitle,ModuleInfoService) {
    PageTitle.setTitle('Home');
    ModuleInfoService.moduleTitle = 'Home';
    ModuleInfoService.moduleDescription = '';
  });
