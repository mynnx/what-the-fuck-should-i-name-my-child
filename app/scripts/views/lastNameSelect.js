/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LastNameSelectView = Backbone.View.extend({
        events: {
            'click :submit': 'nameChosen'
        },

        template: JST['app/scripts/templates/lastNameSelect.ejs'],

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template({}));
        },

        nameChosen: function () {
            var name = $('#lastNameInput').val();
            this.trigger('lastNameSelected', name);
        }
    });

    return LastNameSelectView;
});
