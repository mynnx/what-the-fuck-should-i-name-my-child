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
            ':gender/:lastName/suggest': 'nameSuggestRoute',
            ':gender/:lastname/:hash': 'nameDirectRoute'
        },

        defaultRoute: function () {
            this.appView.askForGender();
        },

        lastNameRoute: function (gender) {
            this.appView.askForLastName(gender);
        },

        nameSuggestRoute: function (gender, lastName) {
            this.appView.showName(gender, lastName);
        },

        nameDirectRoute: function (gender, lastName, index) {
            this.appView.showName(gender, lastName, index);
        },

    });

    return childRouter;
});


