/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'ga',
    'templates'
], function ($, _, Backbone, ga, JST) {
    'use strict';

    var LastNameSelectView = Backbone.View.extend({
        events: {
            'submit #lastNameForm': 'nameChosen'
        },

        template: JST['app/scripts/templates/lastNameSelect.ejs'],

        initialize: function (options) {
            this.options = options || {};
        },

        tagName: 'div',

        render: function () {
            this.$el.html(this.template({
                gender: this.options.gender
            }));
            return this;
        },

        nameChosen: function (e) {
            var name = this.$('#lastNameForm :text').val();
            if (name !== '') {
                Backbone.history.navigate(
                    this.options.gender + '/' +
                    name + '/suggest', true);
            }
            e.preventDefault();
        }
    });

    return LastNameSelectView;
});
