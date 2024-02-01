// const {src, dest, watch, series} = require('gulp')
import gulp from "gulp";
const { src, dest, watch, series } = gulp;
// const sass = require('gulp-sass')(require('sass'))
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

function buildStyles() {
  return src("src/sass/**/*.scss").pipe(sass()).pipe(dest("src"));
}

function watchTask() {
  watch(["src/sass/**/*.scss"], buildStyles);
}

export default series(buildStyles, watchTask);
