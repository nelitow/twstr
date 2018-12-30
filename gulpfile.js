var gulp        = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var php  = require('gulp-connect-php');
var browserSync2 = require('browser-sync');

gulp.task('browser-sync',['php'], function() {
    browserSync.init(["css/*.css", "js/*.js"], {
        proxy: '127.0.0.1:8010',
        port: 8080,
        open: true,
        notify: false,
    });
    gulp.watch("*.html").on("change", reload);
});

gulp.task('sass', function () {
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
    gulp.src('scss/aw-modal.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("/*.html");
    gulp.watch("js/*.js");
});

gulp.task('php', function() {
    php.server({ base: './', port: 8010, keepalive: true});
});

gulp.task('connect-sync', function() {
  php.server({}, function (){
    browserSync2({
      proxy: '127.0.0.1:8000'
    });
  });

  gulp.watch("scss/*.scss", ['sass']).on('change', function () {
    browserSync.reload();
  });
});
