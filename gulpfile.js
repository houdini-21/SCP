var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('styles', function () {
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('src/public'));
})

gulp.task('assets', function() {
	gulp
		.src('src/assets/*')
		.pipe(gulp.dest('src/public'));
})

gulp.task('default', ['styles', 'assets'])