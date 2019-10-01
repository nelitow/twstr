const browsersync = require("browser-sync");
const gulp = require("gulp");
const phpConnect = require('gulp-connect-php');
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function connectsync() {
    phpConnect.server({
        port: 8000,
        keepalive: true,
        base: "."
    }, function (){
        browsersync({
            proxy: '127.0.0.1:8000'
        });
    });
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function watchFiles() {
    gulp.watch("./**/*.php", browserSyncReload);
    gulp.watch("./scss/**", css);
}

function css() {
    return gulp
    .src("./scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./css/"))
    .pipe(browsersync.stream());
 }

const watch = gulp.parallel([watchFiles, connectsync]);

exports.default = watch;
