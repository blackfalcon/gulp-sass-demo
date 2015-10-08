'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

// Gulp Sass Task
gulp.task('build:css', function() {
  gulp.src('./scss/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded', //alt options: nested, compact, compressed
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
          cascade: false
        }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./scss/{,*/}*.{scss,sass}', ['build:css'])
})

gulp.task('default', ['build:css']);
