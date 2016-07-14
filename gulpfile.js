var gulp = require("gulp");
var ts = require("gulp-typescript");
var del = require("del");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var tsProject = ts.createProject("tsconfig.json");

var paths = {
    distPath: './dist',
    buildPath: './build_ts',
    sourcePath: './src/**/*.js'
};
webpackConfig.entry.app = './build_ts/index.js';

gulp.task('clean', function () {
    return del([paths.buildPath + "/**/*.js", paths.distPath + "/**/*.js"]);
});

gulp.task('ts-build', ['clean'], function () {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest(paths.buildPath));

}),

    gulp.task('webpack', ['ts-build'], function (done) {
        webpack(webpackConfig, function (err, stats) {
            console.log('[webpack:build]', stats.toString({
                colors: true
            }));

            var webpackErrors = stats.compilation.errors;
            if (err || (webpackErrors && webpackErrors.length)) {
                console.error(err);
                console.error(stats.compilation.errors);
            }
            done();
        });
    });

gulp.task('default', ['webpack'], function () {

});