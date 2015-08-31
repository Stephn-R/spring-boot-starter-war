'use strict';

var cfg = {};

// Directory Patterns
cfg.dirs = {};
cfg.dirs.webapp     = 'src/main/webapp';
cfg.dirs.resources  = cfg.dirs.webapp + '/resources';
cfg.dirs.angularapp = cfg.dirs.resources + '/app';
cfg.dirs.gzip       = cfg.dirs.resources + '/gzip';
cfg.dirs.jsdoc      = cfg.dirs.webapp + '/_jsdocs';
cfg.dirs.sassdoc    = cfg.dirs.webapp + '/_sassdocs';
cfg.dirs.sass       = cfg.dirs.resources + '/stylesheets';
cfg.dirs.vendor     = cfg.dirs.resources + '/vendor';

// Basic Glob Patterns
cfg.glob = {};
cfg.glob.allJS   =  '/**/*.js';
cfg.glob.allCSS  =  '/**/*.css';
cfg.glob.allSass =  '/**/*.scss';

// Defined Globs
cfg.angularFiles = cfg.dirs.angularapp + cfg.glob.allJS;
cfg.sassFiles   = cfg.dirs.sass + cfg.glob.allSass;

// Options
cfg.sassDocOptions = {
  dest: cfg.dirs.sassdoc,
  verbose: true,
  display: {
    access: ['public', 'private'],
    alias: true,
    watermark: true,
  }
};

module.exports = cfg;
