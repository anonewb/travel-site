// webpack first searches for this file in our root project folder
// create object that tells webpack what to do

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: __dirname+'./app/temp/scripts',
		filename: "bundle.js"
	}
}