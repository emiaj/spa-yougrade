'use strict';

angular.module('spaYougradeApp')
  .factory('PageTitle', function (SystemInfo) {
    // Service logic
    // ...

    var title = '';

    // Public API here
    return {
      setTitle: function(value){
        title = value;
      },
      getTitle: function () {
        var value = SystemInfo.name;
        if(title){
          return value + ':::' + title;
        }
        return value;
      }
    };
  });
