/*global define*/

define([
    'backbone',
    'analytics'
], function (Backbone, Analytics) {
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
            Analytics.sendPageView();
            this.appView.displayLanding();
        },

    });

    return childRouter;
});


