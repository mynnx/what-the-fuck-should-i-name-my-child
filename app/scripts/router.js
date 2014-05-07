define([
    'backbone',
], function (Backbone) {
    'use strict';

    var childRouter = Backbone.Router.extend({
        initialize: function(options) {
            this.appView = options.appView;
        },

        routes: {
            '*path': 'defaultRoute',
            'lastName': 'lastNameRoute'
        },

        defaultRoute: function () {
            this.appView.displayLanding();
        },

    });

    return childRouter;
});


