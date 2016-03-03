'use strict';
var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    uglify     = require('gulp-uglifyjs');

gulp.task('js:compile', function() {
	gulp.src('src/translation.js')
        .pipe(uglify('translation.min.js', {
          outSourceMap: true
        }))
		.pipe(gulp.dest('./build/'));

    gulp.src('translation.js')
		.pipe(browserify())
        .pipe(uglify('translation.min.js', {
          outSourceMap: true
        }))
		.pipe(gulp.dest('./'));
});

gulp.task('js', ['js:compile']);
