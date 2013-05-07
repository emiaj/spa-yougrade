'use strict';

angular.module('spaYougradeApp')
  .controller('MainCtrl', function ($scope,PageTitle,ModuleInfoService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    PageTitle.setTitle('Home');
    ModuleInfoService.moduleTitle = 'Home';
    ModuleInfoService.moduleDescription = '';
  });
