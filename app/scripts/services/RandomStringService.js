'use strict';

angular.module('spaYougradeApp')
  .factory('RandomStringService', function () {
    // Service logic
    // ...
    // Public API here
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return {
      getValue: function (count) {
        if(count <= 0){
          return '';
        }
        var val = possible.charAt(Math.floor(Math.random() * possible.length));
        return val + this.getValue(count-1);
      }
    };
  });
