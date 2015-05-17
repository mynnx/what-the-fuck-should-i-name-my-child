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
        template: JST['app/scripts/templates/genderSelect.ejs'],

        tagName: 'div',

        render: function () {
            this.$el.html(this.template({}));
            return this;
        },
    });

    return GenderSelectView;
});
