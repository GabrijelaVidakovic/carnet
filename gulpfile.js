var sassImport = require('gulp-sass-import'),
  sass = require('gulp-sass');

rename = require('gulp-rename');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var del = require('del');

gulp.task('default', ['sass']);

gulp.task('sass', function () {
  return gulp.src('app/scss/**/styles.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    port: 8080
  })
})

gulp.task('watch', ['sass', 'browserSync'], function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('fonts', function () {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', function () {
  return del.sync('dist');
})
