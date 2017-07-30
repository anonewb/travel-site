//  We use require method to load(import) libraries and modules(packages) and it doesnt need any extension
//	gulp works with different tasks
//	task() takes 2 parameters (name of task,what to do with this task)
//	gulp must have a default task

// gulp.task('default',function(){         
// 	console.log("yo!");
// });

// gulp.task('html',function(){			
// 	console.log("index.html file changed!!");
// });

require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprite');
require('./gulp/tasks/scripts');





