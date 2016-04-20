var path = require('path');
var url = require('url');

var closure = require('closure-util');
var nomnom = require('nomnom');

var log = closure.log;

var options = nomnom.options({
  port: {
    abbr: 'p',
    'default': 4000,
    help: 'Port for incoming connections',
    metavar: 'PORT'
  },
  loglevel: {
    abbr: 'l',
    choices: ['silly', 'verbose', 'info', 'warn', 'error'],
    'default': 'info',
    help: 'Log level',
    metavar: 'LEVEL'
  }
}).parse();


/** @type {string} */
log.level = options.loglevel;

log.info('ol3-google-maps', 'Parsing dependencies ...');
var manager = new closure.Manager({
  closure: true, // use the bundled Closure Library
  lib: [
    'src/**/*.js'
  ],
  ignoreRequires: '^ol\\.'
});
manager.on('error', function(e) {
  log.error('ol3-google-maps', e.message);
});
manager.on('ready', function() {
  var server = new closure.Server({
    manager: manager,
    loader: '/@loader'
  });
  server.listen(options.port, function() {
    log.info('ol3-google-maps', 'Listening on http://localhost:' +
        options.port + '/ (Ctrl+C to stop)');
  });
  server.on('error', function(err) {
    log.error('ol3-google-maps', 'Server failed to start: ' + err.message);
    process.exit(1);
  });
});
