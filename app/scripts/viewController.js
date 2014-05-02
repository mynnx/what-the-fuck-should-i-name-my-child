define([
    'backbone',
    'views/genderSelect',
    'views/lastNameSelect',
    'views/nameView'
], function (Backbone, GenderSelectView, LastNameSelectView, NameView) {
    'use strict';
    var genderSelectView, lastNameSelectView;

    var init = function () {
        Backbone.history.start();
    };

    var displayLanding = function () {
        genderSelectView = new GenderSelectView();
        genderSelectView.on('genderSelected', this.askForLastName, this);
    };

    var askForLastName = function (gender) {
        lastNameSelectView = new LastNameSelectView();
        lastNameSelectView.on('lastNameSelected', this.showName(gender), this);
        lastNameSelectView.setElement('#nameSelect').render();
    };
    
    var showName = function (gender) {
        return function (name) {
            lastNameSelectView.close();
            genderSelectView.close();
            nameView = new NameView({
                'name': name,
                'gender': gender
            });
        };
    };
        

    return {
        'init': init,
        'askForLastName': askForLastName,
        'displayLanding': displayLanding,
        'showName': showName
    };
});

