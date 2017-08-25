// webpack first searches for this file in our root project folder
// create object that tells webpack what to do

module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	}, //obj that lists multiple entry points
	node: {
	    __dirname: true
  	},
  	target: 'node',
	output: {
		path: __dirname+"/app/temp/scripts",
        filename: '[name].js' //[] will keep file name dynamic
	},
	module: { //new obj module
		loaders: [ //property having array
			{
				loader: 'babel-loader', // name of the loader
				query: {  //obj
					presets: ['es2015']
				},
				test: /\.js$/, //regular expression. excluding other than .js files
				exclude:/node_modules/  //excluding .js files
			}
		]
	}
}