var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

var config = {
    srcDir: './sass',
    sassPattern: '**/*.scss'
};

gulp.task('sass', function () {
    gulp.src(config.srcDir + "/" + config.sassPattern)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', function () {
    gulp.watch(config.srcDir + "/" + config.sassPattern, ['sass']);
});