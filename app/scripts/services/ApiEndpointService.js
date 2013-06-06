'use strict';
angular.module('spaYougradeApp')
  .factory('ApiEndpointService',function(ApiSettingsService){
    return function(relativeUrl){
        return ApiSettingsService.baseUrl + relativeUrl;
    }
  });

