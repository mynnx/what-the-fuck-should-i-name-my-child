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

        tagName: 'div',

        initialize : function (options) {
            this.options = options || {};
        },

        render: function () {
            function weightedRandom (fixture) {
                var randomNumber = Math.floor(Math.random() * fixture.total);
                return _.find(fixture.names, function(el) {
                    return randomNumber < el[1];
                })[0];
            }

            var firstName;

            if (this.options.gender === 'girl-btn') {
                firstName = weightedRandom(fixtures.female);
            } else if (this.options.gender === 'boy-btn') {
                firstName = weightedRandom(fixtures.male);
            } else {
                firstName = weightedRandom(fixtures.ambiguous);
            }

            this.$el.html(this.template({
                'firstName': firstName,
                'lastName': this.options.name,
                'gender': this.options.gender
            }));

            return this;
        },

        giveMeAnother: function() {
            this.render();
        }

    });

    return nameView;
});
