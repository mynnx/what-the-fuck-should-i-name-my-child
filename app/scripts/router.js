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
            '': 'defaultRoute',
            ':gender': 'lastNameRoute',
            ':gender/:lastName': 'nameSuggestRoute'
        },

        defaultRoute: function () {
            Analytics.sendPageView();
            this.appView.askForGender();
        },

        lastNameRoute: function (gender) {
            this.appView.askForLastName(gender);
        },

        nameSuggestRoute: function (gender, lastName) {
            this.appView.showName(gender, lastName);
        },


    });

    return childRouter;
});


