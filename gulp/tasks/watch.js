var gulp = require('gulp'), 
watch = require('gulp-watch');         //loading gulp-watch module 
browserSync = require('browser-sync').create();


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