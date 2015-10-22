'use strict';

var cfg = {};

cfg.appname = 'starter';

// Directory Patterns
cfg.dirs = {};
cfg.dirs.webapp     = 'src/main/webapp';
cfg.dirs.resources  = cfg.dirs.webapp + '/resources';
cfg.dirs.views      = cfg.dirs.webapp + '/WEB-INF/views';

// ####################################################################################
// ####################################################################################

// Basic Glob Patterns
cfg.glob = {};
cfg.glob.allViews = '/**/*.{jsp,html}';

// ####################################################################################
// ####################################################################################

// Defined Globs
cfg.glob.views = cfg.dirs.views + cfg.glob.allViews;

// ####################################################################################
// ####################################################################################

// Options
cfg.options = {};

cfg.options.wiredepOptions = {
  src: [
    'src/main/webapp/WEB-INF/views/**/*.{html,jsp}'
  ],
  dependencies: true,
  devDependencies: true
};

// ####################################################################################
// ####################################################################################

module.exports = cfg;
