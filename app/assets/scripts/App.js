import MobileMenu from './modules/MobileMenu' //MobileMenu is just a var name,its name can be anything.but to stay organized name it same as name of the class
//We cant just import above module, we have to create an obj that uses this MobileMenu class as a blueprint

var mobileMenu = new MobileMenu(); //new MobileMenu(); creates new obj


//***********************************************************************************************//

// var $ = require('jquery'); //require is not a part of js lang, it is a part of node
// //var Person = require('./modules/Person'); //here Person contains only Person constructor function, not the entire Person.js. Means no code outside Person constructor function
// import Person from './modules/Person';


// class Adult extends Person {
// 	payTaxes() {
// 		console.log(this.name + " now owes $0 in taxes");
// 	}
// }

// alert("ABC 321");

// var john = new Person("John Doe", "Red");
// john.greet();

// var jane = new Adult("Jane Smith", "Green");
// jane.greet();
// jane.payTaxes();

// //asume jane is a adult and jane is a baby
// //only jane can pay taxes