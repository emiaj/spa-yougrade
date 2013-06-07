'use strict';
angular.module('spaYougradeApp')
  .factory('ApiEndpointService',function(ApiSettingsService){

    return {
      urlFor: function(relativeUrl){
        return ApiSettingsService.baseUrl + relativeUrl;
      }
    };
  });

