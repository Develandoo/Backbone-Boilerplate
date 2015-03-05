'use strict';

console.log("router loaded");
define(['backbone'], function (Backbone) {
 
    return Backbone.Router.extend({
 
        routes: {
            "": "home",
            "about/:id": "about"
        },
 
        home: function () {
          console.log("Home is triggered"); 
        },
 
        about: function (id) {
          console.log("loaded About", id);
          require(['scripts/model/main.model'], function(Model) {
            new Model();
          });
         
        }
 
    });
});
