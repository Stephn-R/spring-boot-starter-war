'use strict';

var cfg = {};

// Directory Patterns
cfg.dirs = {};
cfg.dirs.webapp     = 'src/main/webapp';
cfg.dirs.resources  = cfg.dirs.webapp + '/resources';

// Documentation Dirs
cfg.dirs.jsdoc      = cfg.dirs.webapp + '/_jsdocs';
cfg.dirs.sassdoc    = cfg.dirs.webapp + '/_sassdocs';

// Resource Dirs
cfg.dirs.angularapp = cfg.dirs.resources + '/app';
cfg.dirs.zip        = cfg.dirs.resources + '/zip';
cfg.dirs.sass       = cfg.dirs.resources + '/stylesheets';
cfg.dirs.vendor     = cfg.dirs.resources + '/vendor';

// Basic Glob Patterns
cfg.glob = {};
cfg.glob.allJS   =  '/**/*.js';
cfg.glob.allCSS  =  '/**/*.css';
cfg.glob.allSass =  '/**/*.scss';
cfg.glob.vendorFilesCSS = [
  cfg.dirs.vendor + '/bootstrap/dist/css/bootstrap.min.css'
];
cfg.glob.vendorFilesJS = [
  cfg.dirs.vendor + '/angular/angular.min.js',
  cfg.dirs.vendor + '/bootstrap/dist/js/bootstrap.min.js'
];

// Defined Globs
cfg.angularFiles = cfg.dirs.angularapp + cfg.glob.allJS;
cfg.sassFiles    = cfg.dirs.sass + cfg.glob.allSass;

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
