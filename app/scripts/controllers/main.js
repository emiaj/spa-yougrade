'use strict';

angular.module('spaYougradeApp')
  .controller('MainCtrl', function ($scope,PageTitle) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    PageTitle.setTitle('Home');
  });
