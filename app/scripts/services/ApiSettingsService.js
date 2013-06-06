'use strict';
angular.module('spaYougradeApp')
  .factory('ApiSettingsService',function(){
    return {
      baseUrl: 'http://localhost:8080/'
    }
  });
