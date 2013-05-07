'use strict';

angular.module('spaYougradeApp')
  .controller('CurrentIdentityCtrl', function ($scope,SecurityContext) {
    $scope.currentIdentity = SecurityContext.currentIdentity();
  });
