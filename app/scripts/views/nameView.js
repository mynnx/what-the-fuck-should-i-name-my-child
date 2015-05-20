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
            'click #giveMeAnother': 'giveMeAnother',
            'click #share': 'share'
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
                this.options.firstName = fixture.names[this.options.index][0];
            } else {
                foundName = this.weightedRandom(fixture.total, fixture.names);
                this.options.index = foundName['index'];
                this.options.firstName = foundName['item'];
                Backbone.history.navigate(this.options.gender + '/' + this.options.lastName
                                            + '/' + this.options.index);
            }

            this.$el.html(this.template({
                'firstName': this.options.firstName,
                'lastName': this.options.lastName,
                'gender': this.options.gender,
                'index': this.options.index,
                'quote': this.weightedRandom(fixtures.nameQuotes.total,
                                        fixtures.nameQuotes.quotes)['item']
            }));

            return this;
        },


        share: function(e) {
             var share_url = "http://whatthefuckshouldinamemychild.com/?utm_source=facebook&utm_medium=share&utm_campaign=ithink#"
                + this.options.gender + "/" + this.options.lastName + "/" + this.options.index;
             var name = '"' + this.options.firstName.toUpperCase() + " "
                + this.options.lastName.toUpperCase() + '"';

             FB.ui({
                 app_id: '631721073572524',
                 method: 'feed',
                 link: share_url,
                 caption: "Should I name my kid " + this.options.firstName + "?",
                 name: name,
             }, function(response){
                 ga('send', 'social', 'facebook', 'share', share_url);
             });
             e.preventDefault();
        },

        giveMeAnother: function() {
            this.options.index = undefined;
            this.render();
        }
    });

    return nameView;
});
