import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader { //new module
	constructor() {
		this.siteHeader = $(".site-header"); //grabing site-header element
		this.headerTriggerElement = $(".large-hero__title"); //grabbing large-hero__title element
		this.createHeaderWaypoint(); // calling our newly created method
	}

	createHeaderWaypoint() {
		var that = this; //used "that" coz we want to point "this" viz inside handler functn to our main obj i.e StickyHeader 
		new Waypoint({ //as we imported waypoints library above..we have access to its class
			element: this.headerTriggerElement[0], // "element" shud hv DOM element as value and "this.headerTriggerElement" is jq obj so we wrote this.headerTriggerElement[0] which points to DOM element
			handler: function(direction) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark"); //added modifier class to site-header to bcom dark
				} else {
					that.siteHeader.removeClass("site-header--dark"); //removed modifier class to site-header to bcom dark
				}
			}
		});
	}
}

export default StickyHeader;