//  We use require method to load(import) libraries and modules(packages)

var gulp = require('gulp'), 
watch = require('gulp-watch'),          //loading gulp-watch module 
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
browserSync = require('browser-sync').create();

//gulp works with different tasks

gulp.task('default',function(){         //gulp must have a default task
	console.log("yo!");
});

gulp.task('html',function(){			//task() takes 2 parameters (name of task,what to do with this task)
	console.log("index.html file changed!!");
});

gulp.task('styles',function(){			//styles task is responsible for any postcss to occur
	return gulp.src('./app/assets/styles/styles.css')				//src file
		.pipe(postcss([cssimport,cssvars, nested, autoprefixer]))	//add filters to src file
		.pipe(gulp.dest('./app/temp/styles')); 						//dest file
});

gulp.task('watch',function(){			//in cmd we write "gulp watch"
 	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"  			//points server to baseDir(db directory) to app folder
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();			//reloads browser asa we save ur index.html file
	});

	watch('./app/assets/styles/**', function(){	
		gulp.start('cssInject');		//starts cssInject task but styles task will run first
										//cssInject is very useful for JS
	});

});

gulp.task('cssInject', ['styles'], function() { 	//[] consist dependencies tasks which shud be completed first then cssInject task will run
	return	gulp.src('./app/temp/styles/styles.css') //as gulp.src() is asyncronous function we use return
			.pipe(browserSync.stream()); 			// stream() makes available to browser whateva we are piping into it
});