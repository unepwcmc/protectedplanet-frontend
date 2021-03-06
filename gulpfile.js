"use strict";

var gulp = require("gulp");
var replace = require("gulp-replace");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function () {
  return gulp.src("./src/style/main.scss")
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(replace('asset-url', 'url'))
    .pipe(gulp.dest("./dist/style"));
});

gulp.task("fonts", function() {
  var fontsSrcPath = './src/style/fonts/*';
  var fontsDistPath = './dist/style/fonts';

  return gulp.src(fontsSrcPath).pipe(gulp.dest(fontsDistPath));
});

gulp.task("images", function() {
  var imagesSrcPath = './src/style/images/**/*';
  var imagesDistPath = './dist/style/images';

  return gulp.src(imagesSrcPath).pipe(gulp.dest(imagesDistPath));
});

gulp.task("watch", function () {
  gulp.watch("./src/style/**/*.scss", ["sass"]);
  gulp.watch("./src/style/fonts/*", ["fonts"]);
  gulp.watch("./src/style/images/**/*", ["images"]);
});

gulp.task("default", ["sass", "fonts", "images", "watch"]);
