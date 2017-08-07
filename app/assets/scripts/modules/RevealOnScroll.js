import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor() {
		this.itemsToReveal = $(".feature-item"); //selected this element
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		this.itemsToReveal.each(function() { //inside each(), value of this keyword is set to current DOM element which it is looping
											//but inside Waypoints() obj, this keyword will point to the obj itself i.e Waypoints() 
											//but we dont want this. to avoid this we can do...
			var currentItem = this;								
			new Waypoint({ //as we imported waypoints library above..we have access to its class
				element: currentItem, //DOM element which we want to watch
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},  //what is to happen when this element is scrolled to
				offset: "85%" //reveal when 85% of screen is scrolled
			}); //Waypoints obj needs atleast 2 properties
		}); //anything inside this each() method will run once for each element
	}
}

export default RevealOnScroll;