var gulp = require('gulp');
var browsersync = require('browser-sync').create();

gulp.task('serve', [], function() {
  browsersync.init({
    server: './',
    notify: false
  });
});

gulp.task('watch', ['serve'], function () {
    gulp.watch('*.html', [browsersync.reload]);
});

gulp.task('default', ['watch']);