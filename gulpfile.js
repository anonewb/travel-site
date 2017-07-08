var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars');
nested = require('postcss-nested');


gulp.task('default',function(){
	console.log("yo!");
});

gulp.task('html',function(){
	console.log("index.html file changed!!");
});

gulp.task('styles',function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){

	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**', function(){
		gulp.start('styles');
	});

});