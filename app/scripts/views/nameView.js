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

        weightedRandom: function (total, list) {
            var randomNumber, chosenItem, chosenIndex;
            randomNumber = Math.floor(Math.random() * total);
            chosenItem = _.find(list, function(el, idx) {
                if (randomNumber < el[1]) {
                    chosenIndex = idx;
                    return true;
                }
                return false;
            })[0];
            return {item: chosenItem, index: chosenIndex};
        },

        getFixture: function () {
            if (this.options.gender === 'girl') {
                return fixtures.female;
            } else if (this.options.gender === 'boy') {
                return fixtures.male;
            }
            return fixtures.ambiguous;
        },

        render: function () {
            var fixture, nameToDisplay, foundName;
            fixture = this.getFixture();

            if (this.options.index) {
                nameToDisplay = fixture.names[this.options.index][0];
            } else {
                foundName = this.weightedRandom(fixture.total, fixture.names);
                nameToDisplay = foundName['item'];
                Backbone.history.navigate(this.options.gender + '/' + this.options.name
                                            + '/' + foundName['index']);
            }

            this.$el.html(this.template({
                'firstName': nameToDisplay,
                'lastName': this.options.name,
                'quote': this.weightedRandom(fixtures.nameQuotes.total,
                                        fixtures.nameQuotes.quotes)['item']
            }));

            return this;
        },

        giveMeAnother: function() {
            this.namesDisplayed++;
            ga('send', 'event', 'Interaction', 'Name Given', this.options.gender);
            this.options.index = undefined;
            this.render();
        }
    });

    return nameView;
});
