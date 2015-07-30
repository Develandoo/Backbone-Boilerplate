'use strict';

console.log('router loaded');
define(['backbone'], function (Backbone, d3) {

    return Backbone.Router.extend({

        routes: {
            '(/)':  'main',
            'about(/:state)': 'about'
        },

        main: function() {
          console.log('Main route is loaded');
        },

        about: function (state) {
          console.log('loaded About', state);
          require(['scripts/model/main.model'], function(Model) {
            new Model();
          });
        }

    });
});
