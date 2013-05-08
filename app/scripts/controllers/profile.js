'use strict';

angular.module('spaYougradeApp')
  .controller('ProfileCtrl', function ($scope,PageTitle,ModuleInfoService) {
	PageTitle.setTitle('User Profile');
    ModuleInfoService.moduleTitle = 'User Profile';
    ModuleInfoService.moduleDescription = '';

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
