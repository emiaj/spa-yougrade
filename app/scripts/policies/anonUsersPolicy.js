'use strict';

angular.module('spaYougradeApp')
.run(function($rootScope,$location,SecurityContext){
    // register listener to watch route changes
    $rootScope.$on( '$routeChangeStart', function(event, next, current) {
      if ( !SecurityContext.isAuthenticated() ) {
        // no logged user, we should be going to #login
        if ( next.templateUrl != "partials/login.html" ) {
          // not going to #login, we should redirect now
          $location.path( "/login" );
        }
      }         
    })
});   