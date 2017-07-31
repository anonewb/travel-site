var $ = require('jquery'); //require is not a part of js lang, it is a part of node
//var Person = require('./modules/Person'); //here Person contains only Person constructor function, not the entire Person.js. Means no code outside Person constructor function
import Person from './modules/Person';


class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes");
	}
}

alert("ABC 321");

var john = new Person("John Doe", "Red");
john.greet();

var jane = new Adult("Jane Smith", "Green");
jane.greet();
jane.payTaxes();

//asume jane is a adult and jane is a baby
//only jane can pay taxes