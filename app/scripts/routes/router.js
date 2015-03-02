'use strict';
/*define(function (require) {
 
    "use strict";
 
    var $           = require('jquery'),
        Backbone    = require('backbone'),
         
        $content = $("#content");
 
    return Backbone.Router.extend({
 
        routes: {
            "":                 "home",
            "employees/:id":    "employee"
        },
 
        home: function () {
            require(["app/views/Home"], function (HomeView) {
                var view = new HomeView({el: $content});
                view.render();
            });
        },
 
        employee: function (id) {
            require(["app/views/Employee", "app/models"], function (EmployeeView, models) {
                var employee = new models.Employee({id: id});
                employee.fetch({
                    success: function (data) {
                        var view = new EmployeeView({model: data, el: $content});
                        view.render();
                    }
                });
            });
        }
 
    });
 
});*/

