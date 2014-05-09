define([
    'backbone',
    'views/genderSelect',
    'views/lastNameSelect',
    'views/nameView'
], function (Backbone, GenderSelectView, LastNameSelectView, NameView) {
    'use strict';
    var genderSelectView, lastNameSelectView, nameView;

    var appView = Backbone.View.extend({
        el: '#container',

        render: function () {
            this.$el.html('');
        },

        displayLanding: function () {
            genderSelectView = new GenderSelectView();
            genderSelectView.on('genderSelected', this.askForLastName, this);
            this.$el.append(genderSelectView.render().el);
        },

        askForLastName: function (gender) {
            lastNameSelectView = new LastNameSelectView();
            lastNameSelectView.on('lastNameSelected', this.showName(gender), this);
            this.$el.append(lastNameSelectView.render().el);
            lastNameSelectView.$('#lastNameForm :text').focus();
        },
        
        showName: function (gender) {
            return function (name) {
                lastNameSelectView.close();
                genderSelectView.close();
                nameView = new NameView({
                    'name': name,
                    'gender': gender
                });

                this.$el.append(nameView.render().el);
            };
        }
    });
        

    return appView;
});

