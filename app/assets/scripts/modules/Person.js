function Person(name, favColor) {
	this.name = name;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("Hello, my name  is " + this.name + " and my favorite color is " + this.favoriteColor + ". ");
	}
}