/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        ga: {
            exports: 'ga'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        text : '../bower_components/requirejs-text/text',
        ga: ['//www.google-analytics.com/analytics',
             'vendor/analytics']
    }
});

require([
    'backbone',
    'mixins/backboneClose',
    'views/appView',
    'router'
], function (Backbone, _, AppView, Router) {
    var appView = new AppView(),
        router = new Router({'appView': appView});
    Backbone.history.start();
});
