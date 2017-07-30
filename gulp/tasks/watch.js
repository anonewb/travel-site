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

	watch('./app/assets/styles/**/*.css', function(){	
		gulp.start('cssInject');		//starts cssInject task but styles task will run first
										//cssInject is very useful for JS
	});

	watch('./app/assets/scripts/**/*.js', function(){
		//gulp.start('scripts'); // note that this will only start scripts task when gulp watch task 
								// is run but this doesnt refreshes the browser automatically

		gulp.start('scriptsRefresh');			// so we create brand new task to do both
	});

});

gulp.task('cssInject', ['styles'], function() { 	//[] consist dependencies tasks which shud be completed first then cssInject task will run
	return	gulp.src('./app/temp/styles/styles.css') //as gulp.src() is asyncronous function we use return
			.pipe(browserSync.stream()); 			// stream() makes available to browser whateva we are piping into it
});

gulp.task('scriptsRefresh', ['scripts'], function() { 	// new task called scriptsRefresh. will run only after scripts task is raned
	browserSync.reload(); // reloads browser automaticlly
});