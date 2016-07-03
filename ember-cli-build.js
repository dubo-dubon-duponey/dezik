/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    /*datatables: {
      core: true,
        style: 'bs', // false, 'dt', 'bs', 'jqui', or 'zf' for styling (none, datatables, bootstrap, jqueryui, or foundation css)
        extensions: [
        { name: 'autofill', style: false },
        { name: 'buttons', extensions: ['colVis','flash','html5','print'] },
        'colreorder',
        'fixedcolumns',
        'fixedheader',
        'keytable',
        { name: 'responsive', style: 'dt' },
        'scroller',
        'select'
      ],
        // these libraries are required for some button types
        pdfmake: false,
        vfs_fonts: false,
        jszip: true
    }*/
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // @dmp private bought theme
  app.import('vendor/theme-application/docs/assets/css/toolkit.css');
  app.import('vendor/theme-application/docs/assets/css/application.css');
  app.import('vendor/theme-application/docs/assets/js/toolkit.js');
/*
  app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot');
  app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg');
  app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf');
  app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff');
  app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff2');
*/

  // DataTables add-on
  // app.import('bower_components/datatables/media/css/jquery.dataTables.css');
  app.import('bower_components/datatables/media/css/dataTables.bootstrap.css');
  app.import('bower_components/datatables/media/js/jquery.dataTables.js');
  app.import('bower_components/datatables/media/js/dataTables.bootstrap.js');

  // Moment
  app.import('bower_components/moment/moment.js');

  return app.toTree();
};
