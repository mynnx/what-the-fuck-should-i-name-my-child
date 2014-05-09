/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LastNameSelectView = Backbone.View.extend({
        errorMessages: [
            'really?  fucking choose a last name already',
            'is your cat stepping on your laptop?  choose a last name!'
        ],

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
            if (name === '') {
                this.$('#lastNameForm').addClass('has-error');
                errorMessage = this.errorMessages.shift();
                if (errorMessage) {
                    this.$('#lastNameForm').append('<p class="error">' + errorMessage + '</p>');
                }
            } else {
                this.trigger('lastNameSelected', name);
            }
            e.preventDefault();
        }
    });

    return LastNameSelectView;
});
