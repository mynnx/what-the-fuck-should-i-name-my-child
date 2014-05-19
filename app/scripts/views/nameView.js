/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'ga',
    'fixtures/fixtures'
], function ($, _, Backbone, JST, ga, fixtures) {
    'use strict';

    var nameView = Backbone.View.extend({
        events: {
            'click #giveMeAnother': 'giveMeAnother'
        },

        namesDisplayed: 0,

        template: JST['app/scripts/templates/nameView.ejs'],

        tagName: 'div',

        initialize : function (options) {
            this.options = options || {};
        },

        render: function () {
            function weightedRandom (total, list) {
                var randomNumber = Math.floor(Math.random() * total);
                return _.find(list, function(el) {
                    return randomNumber < el[1];
                })[0];
            }

            var fixture;
            if (this.options.gender === 'girl-btn') {
                fixture = fixtures.female;
            } else if (this.options.gender === 'boy-btn') {
                fixture = fixtures.male;
            } else {
                fixture = fixtures.ambiguous;
            }

            this.$el.html(this.template({
                'firstName': weightedRandom(fixture.total, fixture.names),
                'lastName': this.options.name,
                'quote': weightedRandom(fixtures.nameQuotes.total,
                                        fixtures.nameQuotes.quotes)
            }));

            return this;
        },

        giveMeAnother: function() {
            this.namesDisplayed++;
            ga('send', 'event', 'progress', 'name', 'new', this.namesDisplayed);
            this.render();
        }

    });

    return nameView;
});
