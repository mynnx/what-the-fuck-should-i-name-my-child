define([
    'backbone',
    'viewController'
], function (Backbone, ViewController) {
    'use strict';

    var childRouter = Backbone.Router.extend({
        routes: {
            '*path': 'defaultRoute',
            'lastName': 'lastNameRoute'
        },

        defaultRoute: function () {
            ViewController.displayLanding();
        },

    });

    return childRouter;
});


