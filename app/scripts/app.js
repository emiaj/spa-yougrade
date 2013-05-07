'use strict';

var app = angular.module('spaYougradeApp', ['ui.compat'])
  .config(function($routeProvider, $urlRouterProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });


    $routeProvider
    	.when('/login'{
    		templateUrl: 'views/login.html',
    		controller: 'LoginCtrl'
    	});  



    $urlRouterProvider.when('/','/').otherwise('/');
  });

app.run(function($rootScope){
    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( $rootScope.loggedUser == null ) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "partials/login.html" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path( "/login" );
        }
      }         
    });
});