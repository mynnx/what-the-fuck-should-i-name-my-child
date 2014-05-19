/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'ga',
    'templates'
], function ($, _, Backbone, ga, JST) {
    'use strict';

    var GenderSelectView = Backbone.View.extend({
        events: {
            'click .choice': 'selectedGender'
        },

        template: JST['app/scripts/templates/genderSelect.ejs'],

        tagName: 'div',

        render: function () {
            this.$el.html(this.template({}));
            return this;
        },

        selectedGender: function(e) {
            var chosenGender;

            ['boy-btn', 'girl-btn', 'fff-btn'].forEach(function (id) {
                if (id !== e.target.id) {
                    $('#' + id).hide();
                } else {
                    chosenGender = id;
                }
            });
            ga('send', 'event', 'progress', 'gender', chosenGender);
            this.trigger('genderSelected', chosenGender);
        }
    });

    return GenderSelectView;
});
