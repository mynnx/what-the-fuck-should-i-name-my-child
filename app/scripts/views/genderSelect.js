/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
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
                    $('#' + id).hide(5);
                } else {
                    chosenGender = id;
                }
            });
            this.trigger('genderSelected', chosenGender);
        }
    });

    return GenderSelectView;
});
