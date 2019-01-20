const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const pump   = require('pump');
const rename = require("gulp-rename");
const babel = require('gulp-babel');



gulp.task('compress-js', function() {

  pump([
        gulp.src('src/*.js'),
        babel({
            presets: ['@babel/env']
        }),
        uglify(),
        rename("wgx.min.js"),
        gulp.dest('dist'),
    ]
  );

  pump([
        gulp.src('src/*.js'),
        babel({
            presets: ['@babel/env']
        }),
        rename("wgx.js"),
        gulp.dest('dist'),
    ]
  );

});


gulp.task('compile', function (cb) {
  gulp.watch("src/*.js", ["compress-js"]);
});
