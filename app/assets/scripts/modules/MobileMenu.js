//MobileMenu.js is a module***

import $ from 'jquery';

class MobileMenu {
	constructor() { // This constructor functn will ran immediately when a new obj is created with this MobileMenu class

		this.menuIcon = $(".site-header__menu-icon"); // property that stores DOM selection for our MobileMenu
		this.menuContent = $(".site-header__menu-content"); //creating a shortcut to that div i.e currently hidden
		this.events(); // calls events() method
	}

	events() { //within this non-special method, list any or all events which we want to watch for.
		this.menuIcon.click(this.toggleTheMenu.bind(this)); //when the menuIcon is clicked we want to call toggleTheMenu() method. Anything inside bind() is passed will be used as this keyword in toggleTheMenu() method 
		 //here this keyword is pointing to object MobileMenu as we normally want
	}

	toggleTheMenu() { //brand new method to handle events present in event() method
		 //now this keyword points towards our main obj as we wanted. before this keyword is pointing to menuIcon element as its used as an event handler used inside above this.menuIcon.click(this.toggleTheMenu) event. To make this keyword point to our main obj we use bind method
		this.menuContent.toggleClass("site-header__menu-content--is-visible"); //adding new class called &--is-visible using BEM methodology
	}
}

export default MobileMenu; // ES5 way of exporting this class