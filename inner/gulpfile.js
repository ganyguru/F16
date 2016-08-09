var gulp = require('gulp'),
livereload = require('gulp-livereload'),
http = require('http'),
st = require('st');

gulp.task('less', function() {
  gulp.src('css/*.css')
    .pipe(livereload());
});

gulp.task('default', ['server'], function() {
  livereload.listen();
  gulp.watch(['css/*.css','index.php'], ['less']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname , index: '/', cache: false })
  ).listen(8080, done);
});
