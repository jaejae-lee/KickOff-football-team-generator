let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let gulpSequence = require('gulp-sequence');
let watch = require('gulp-watch');

//set up a task to minify the css and call it style.min.css
gulp.task('minify-css', () => {
  return gulp.src('./src/css/style.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./src/css/'));
});

//set up the Sass function which will compile the css from the scss file
gulp.task('sass', function() {
    gulp.src('./src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

//combine the two functions using gulpSequence into a task called styles
gulp.task('styles', function(callback){
	gulpSequence('sass', 'minify-css')(callback)
});

//set up the watch task which will be passing the combination of the two functions, SASS and minify-css
gulp.task('watch',function() {
    gulp.watch('./src/sass/style.scss',['styles']);
});