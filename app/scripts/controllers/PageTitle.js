'use strict';

angular.module('spaYougradeApp')
  .controller('PageTitleCtrl', function ($scope,PageTitle) {
    $scope.getTitle = PageTitle.getTitle;
  });
