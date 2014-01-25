// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    appDefaults = {
      stylesDir : "styles/" // path to styles
    }

// Styles
gulp.task('styles', function() {
  return gulp.src(appDefaults.stylesDir+'**/*.scss')
    .pipe(sass({ style: 'compressed'  }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(appDefaults.stylesDir))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(appDefaults.stylesDir)) 
    .pipe(notify({ message: 'Styles task complete' }));
});


// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(appDefaults.stylesDir+'**/*.scss', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('styles');
  });

});


// Default task
gulp.task('default', ['clean'], function() {
    gulp.run('styles');
});