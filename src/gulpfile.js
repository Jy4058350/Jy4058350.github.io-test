// gulpfile.js
import gulp from "gulp";
import replace from "gulp-replace";
console.log("gulp", gulp);
console.log("replace", replace);

gulp.task("replace", function () {
  return gulp
    .src(["./index.html"])
    .pipe(replace("./public/img/", "./assets/"))
    .pipe(gulp.dest("./dist"));
});
