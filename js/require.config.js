requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: 'js',

  priority: ['underscore',
    'underscore.string',
    'jquery',
    'jqueryui',
    'bootstrap'],

  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    // TODO
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    'marionette': {
      deps: [
        'backbone'
      ],
      exports: 'Marionette'
    },
    'bootstrap': ['jquery']
  }
});