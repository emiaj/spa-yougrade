'use strict';

angular.module('spaYougradeApp')
  .controller('CurrentIdentityCtrl', function ($scope,SecurityContext,SystemInfo) {
    $scope.currentIdentity = SecurityContext.currentIdentity();
    $scope.name = SystemInfo.name;
  });
