//Person.js is a module***

function Person(name, favColor) {
	this.name = name;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("Hello, my name  is " + this.name + " and my favorite color is " + this.favoriteColor + ". ");
	}
}

module.exports = Person; // exports = {} object acts like the return statement.
						// module.exports literally is assigned to Person constructor function.
						