var gulp = require('gulp'),
webpack = require('webpack'); // webpack bundles all scripts file or css files

gulp.task('scripts', function(callback){
	webpack(require('../../webpack.config.js'), function(err, stats){ //webpack needs parameter called require() in which it needs path to webpack.config.js file
		if(err){													// to display err msg
			console.log(err.toString());
		}

		console.log(stats.toString());								// to display statistics
		callback(); //to check if webpack is playing nicely with gulp
					//i.e gulp is aware when webpack completes
	});
});