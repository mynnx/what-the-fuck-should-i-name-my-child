/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'fixtures/fixtures'
], function ($, _, Backbone, JST, fixtures) {
    'use strict';

    var nameView = Backbone.View.extend({
        events: {
            'click #giveMeAnother': 'giveMeAnother'
        },

        template: JST['app/scripts/templates/nameView.ejs'],

        el: '#container2',

        initialize : function (options) {
            this.options = options || {};
            this.render();
        },

        render: function () {
            function randomInArray (array) {
                return array[Math.floor(Math.random() * array.length)]
            }

            var firstName;

            if (this.options.gender === 'girl-btn') {
                firstName = randomInArray(fixtures.femaleNames);
            } else if (this.options.gender === 'boy-btn') {
                firstName = randomInArray(fixtures.maleNames);
            } else {
                firstName = randomInArray(['Pat', 'Mark', 'Sunshine']);
            }

            this.$el.html(this.template({
                'firstName': firstName,
                'lastName': this.options.name,
                'gender': this.options.gender
            }));
        },

        giveMeAnother: function() {
            this.render();
        }

    });

    return nameView;
});
