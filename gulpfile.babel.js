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

function handleError(e) {
  gutil.log(e);
}

/* Installs bower dependencies */
gulp.task('bower:install', function() { return plugins.bower(); });

/* Runs the defined karma tests */
gulp.task('karma', function() {
  gutil.log('No tests have been defined');
});

/* Runs the defined protractor tests */
gulp.task('protractor', function() {
  gutil.log('No tests have been defined');
});

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

/* zips all CSS assets into the zip/ folder */
gulp.task('zipCss', function() {
  return gulp.src(cfg.glob.vendorFilesCSS)
    .pipe(plugins.concat('vendor.css'))
    .pipe(gulp.dest(cfg.dirs.zip));
});

/* zips all JS assets into the zip/ folder */
gulp.task('zipJs', function() {
  return gulp.src(cfg.glob.vendorFilesJS)
    .pipe(plugins.concat('vendor.js'))
    .pipe(gulp.dest(cfg.dirs.zip));
});

// ###########################################################################
// ###########################################################################
gulp.task('appStart', []);
gulp.task('appRestart', []);

gulp.task('lint', ['jshint']);
gulp.task('zip', ['zipCss', 'zipJs']);
gulp.task('test', ['karma', 'protractor']);
gulp.task('build-docs', ['jsdocs', 'sassdocs']);
gulp.task('build', ['bower:install', 'lint', 'test', 'build-docs', 'zip']);
// ###########################################################################
// ###########################################################################
