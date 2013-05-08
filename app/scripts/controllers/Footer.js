'use strict';

angular.module('spaYougradeApp')
  .controller('FooterCtrl', function ($scope,SystemInfo) {
    $scope.name = SystemInfo.name;
  });
