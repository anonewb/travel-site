var gulp = require('gulp'), 
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'); //postcss plugin hexrgba


gulp.task('styles',function(){			//styles task is responsible for any postcss to occur
	return gulp.src('./app/assets/styles/styles.css')				//src file
		.pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))	//adds postcss filters to src file
		.on('error', function(errorInfo) {			//on refers to if. 2 parameters (name of the event, what todo)
			console.log(errorInfo.toString());		//errorInfo contains errors
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles')); 						//dest file
});