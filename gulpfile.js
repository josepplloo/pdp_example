const gulp = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

const SCRIPTS_SRC = './src/**/*.js';
const STYLES_SRC = './src/scss/*.scss';
const IMAGES_SRC = './src/images/**/*';

function html() {
  return gulp.src('src/*.html')
      .pipe(gulp.dest('dist/'));
};

function scripts() {
    return gulp.src(SCRIPTS_SRC)
      .pipe(concat('main.js'))
      .pipe(minify({
        noSource: false
      }))
      .pipe(gulp.dest('dist/js'));
}

function styles() {
    return gulp.src(STYLES_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

function images() {
    return gulp.src(IMAGES_SRC)
        .pipe(gulp.dest('dist/images'));
}

function watch_files() {
    gulp.watch(SCRIPTS_SRC, gulp.series(scripts));
    //gulp.watch(STYLES_SRC, gulp.series(styles));
}

gulp.task('default', gulp.parallel(scripts, styles));
gulp.task('scripts', scripts);
gulp.task('html', html);
gulp.task('styles', styles);
gulp.task('images', images);
gulp.task('watch', gulp.series(scripts, watch_files));
//gulp.task('watch', gulp.series(scripts, styles, images, watch_files));