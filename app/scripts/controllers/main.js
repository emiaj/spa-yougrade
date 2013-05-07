'use strict';

angular.module('spaYougradeApp')
  .config(function($stateProvider) {
    $stateProvider.state('main',{
      url : '/',
      views:{
        '':{
          templateUrl: 'views/main.html',
          controller: function(PageTitle,ModuleInfoService){
            PageTitle.setTitle('Home');
            ModuleInfoService.moduleTitle = 'Home';
            ModuleInfoService.moduleDescription = '';
          }
        },
        navbar:{
          templateUrl:'views/navbar.html'
        }
      }
    });
  })
  .controller('MainCtrl', function ($scope,$state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $state.transitionTo('main');
  });

