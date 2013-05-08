'use strict';

angular.module('spaYougradeApp')
  .controller('LogOutCtrl', function ($location) {
	$location.path( "/login" );
  });
