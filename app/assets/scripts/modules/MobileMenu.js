import $ from 'jquery';

class MobileMenu {
	constructor() { // This constructor functn will ran immediately when a new obj is created with this MobileMenu class
		// $(".site-header__menu-icon").click(function() { //JQuery Spaghetti code. so avoid using this. 1st we ae selecting elements from DOM then Event handling is done and then defining functionality
		// 	console.log("Top right corner icon was clicked");  
		// });

		this.menuIcon = $(".site-header__menu-icon"); // property that stores DOM selection for our MobileMenu
		this.events(); // calls events() method
	}

	events() { //within this non-special method, list any or all events which we want to watch for.
		this.menuIcon.click(this.toggleTheMenu); //when the menuIcon is clicked we want to call toggleTheMenu() method 
	}

	toggleTheMenu() { //brand new method to handle events present in event() method
		console.log("Icon was cllick");
	}
}

export default MobileMenu; // ES5 way of exporting this class