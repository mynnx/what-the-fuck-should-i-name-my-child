define([
    'backbone',
    'views/genderSelect',
    'views/lastNameSelect',
    'views/nameView',
    'templates',
    'ga'
], function (Backbone, GenderSelectView, LastNameSelectView, NameView, JST, ga) {
    'use strict';

    var appView = Backbone.View.extend({
        el: '#container',

        socialTemplate: JST['app/scripts/templates/socialButtons.ejs'],

        setCurrentView: function (view) {
            if (this.currentView) {
                this.currentView.close();
            }
            this.currentView = view;
        },

        initialize: function (view) {
            $('#socialButtons').html(this.socialTemplate({}));
        },

        askForGender: function () {
            var genderSelectView = new GenderSelectView();
            this.setCurrentView(genderSelectView);
            this.$el.append(genderSelectView.render().el);
        },

        askForLastName: function (gender) {
            var lastNameSelectView = new LastNameSelectView({gender: gender});
            this.setCurrentView(lastNameSelectView);

            this.$el.append(lastNameSelectView.render().el);
            lastNameSelectView.$('#lastNameForm :text').focus();
        },

        showName: function (gender, lastName, index) {
            var nameView = new NameView({
                'lastName': lastName,
                'gender': gender,
                'index': index
            });
            this.setCurrentView(nameView);
            this.$el.append(nameView.render().el);
        }
    });


    return appView;
});

