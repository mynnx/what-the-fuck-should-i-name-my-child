/*global define*/

define(['ga', 'backbone'], function (ga, Backbone) {
  'use strict';

  ga('create', 'UA-51008555-1', 'whatthefuckshouldinamemychild.com');
  ga('send', 'pageview');

  return {
    sendPageView: function () {
      ga('send', 'pageview', Backbone.history.root + Backbone.history.getFragment());
    }
  };
});

