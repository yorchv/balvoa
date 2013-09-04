requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: '/',

  priority: ['underscore',
    'jquery',
    'jqueryui',
    'bootstrap'],

  paths: {
    'underscore': 'js/libs/underscore-1.5.1/underscore-min',
    'jquery': 'js/libs/jquery/jquery-2.0.3.min',
    'backbone': 'js/libs/backbone-1.0.0/backbone-min',
    'marionette': 'js/libs/marionette-1.1.0/backbone.marionette.min',

    // Plugins
    'bootstrap': 'js/libs/bootstrap/js/bootstrap.min',
    'jqueryui': 'js/libs/jqueryui/jquery-ui-1.10.3.custom.min',
    'hbs': 'js/libs/require-handlebars/hbs',
    'Handlebars' : 'js/libs/require-handlebars/Handlebars',
    'json2': 'js/libs/json2/json2-2013-05-26',
    'i18nprecompile' : 'js/libs/require-handlebars/i18nprecompile'
  },

  hbs: {
    templateExtension: 'hbs',
    partialBaseDir: 'templates',
    disableI18n: true
  },

  shim: {
    'json2': {
      exports : 'JSON'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery',
        'json2'
      ],
      exports: 'Backbone'
    },
    'marionette': {
      deps: [
        'backbone'
      ],
      exports: 'Marionette'
    },
    'hbs' : {
      deps : ['json2', 'i18nprecompile', 'Handlebars'],
      exports : 'hbs'
    },

    'bootstrap': ['jquery'],
    'jqueryui': ['jquery']

  }
});

require(['js/app/testing']);