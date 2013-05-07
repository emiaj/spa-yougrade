'use strict';

angular.module('spaYougradeApp')
  .controller('ModuleInfoCtrl', function ($scope,ModuleInfoService) {
    $scope.getModuleTitle = function(){
	    return ModuleInfoService.moduleTitle;
    };
    $scope.getModuleDescription = function(){
	    return ModuleInfoService.moduleDescription;
    };
  });
