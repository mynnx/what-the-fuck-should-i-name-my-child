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
            'submit #lastNameForm': 'nameChosen'
        },

        template: JST['app/scripts/templates/lastNameSelect.ejs'],

        tagName: 'div',

        render: function () {
            this.$el.html(this.template({}));
            return this;
        },

        nameChosen: function (e) {
            var name = this.$('#lastNameForm :text').val(),
                errorMessage;
                this.trigger('lastNameSelected', name);
            e.preventDefault();
        }
    });

    return LastNameSelectView;
});
