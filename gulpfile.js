//  We use require method to load(import) libraries and modules(packages)

var gulp = require('gulp'), 
watch = require('gulp-watch'),          //loading gulp-watch module 
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

//gulp works with different tasks

gulp.task('default',function(){         //gulp must have a default task
	console.log("yo!");
});

gulp.task('html',function(){			//task() takes 2 parameters (name of task,what to do with this task)
	console.log("index.html file changed!!");
});

gulp.task('styles',function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssimport,cssvars, nested, autoprefixer]))	//*****imp line
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){			//in cmd we write "gulp watch"

	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**', function(){
		gulp.start('styles');
	});

});