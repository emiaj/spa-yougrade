'use strict';
angular.module('spaYougradeApp')
  .factory('ApiSettingsService',function(){
    return {
      baseUrl: 'http://arcane-reaches-6135.herokuapp.com/'
    };
  });
