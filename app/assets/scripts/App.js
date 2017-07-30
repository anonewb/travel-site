var $ = require('jquery');
var Person = require('./modules/Person'); //here Person contains only Person constructor function, not the entire Person.js. Means no code outside Person constructor function

alert("ABC 321");

var john = new Person("John Doe", "Red");
john.greet();

var jane = new Person("Jane Smith", "Blue");
jane.greet();