'use strict';

// Gulp Modules
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';

// other modules
import stylish from 'jshint-stylish';
import sassdoc from 'sassdoc';

const plugins = gulpLoadPlugins({
  rename: {
    'gulp-scss-lint': 'scssLint'
  }
});

const cfg = require('./gulp-config');

/* Installs bower dependencies */
gulp.task('bower:install', function() { return plugins.bower(); });

/* Runs the JS linter */
gulp.task('jshint', function() {
  return gulp.src(cfg.angularFiles)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter(stylish));
});

/* Runs the JSDoc Generator */
gulp.task('jsdocs', function() {
  return gulp.src(cfg.angularFiles)
    .pipe(plugins.jsdoc(cfg.dirs.jsdoc));
});

/* Runs the SassDoc Generator */
gulp.task('sassdocs', function() {
  return gulp.src(cfg.sassFiles)
    .pipe(sassdoc(cfg.sassDocOptions));
});

gulp.task('gzip', function() {
  gutil.log('GZIP task not implemented');
});

// ###########################################################################
// ###########################################################################
gulp.task('appStart', []);
gulp.task('appRestart', []);

gulp.task('lint', ['jshint']);
gulp.task('build-docs', ['jsdocs', 'sassdocs']);
gulp.task('build', ['bower:install', 'lint', 'build-docs', 'gzip']);
// ###########################################################################
// ###########################################################################
