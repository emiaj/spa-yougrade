'use strict';

angular.module('spaYougradeApp', ['ui.compat'])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.when('/','/').otherwise('/');
  });
