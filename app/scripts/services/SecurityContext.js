'use strict';

angular.module('spaYougradeApp')
  .factory('SecurityContext', function () {
    // Service logic
    // ...
    // Public API here
    return {
      currentIdentity: function () {
        var self = this;
        return {
          name: function(){
            return self.currentUser().identity().name();
          },
          isAuthenticated: function(){
            return self.currentUser().identity().isAuthenticated();
          }
        };
      },
      isAuthenticated: function(){
        return this.currentIdentity().isAuthenticated();
      },
      currentUser: function(){
        return {
          isInRole: function(){
            return true;
          },
          identity: function(){
            return {
              isAuthenticated : function(){
                return true;
              },
              name: function(){
                return 'Test';
              }
            };
          }
        };
      }
    };
  });
