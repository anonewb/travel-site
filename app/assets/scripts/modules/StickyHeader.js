import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader { //new module
	constructor() {
		this.lazyImages = $(".lazyloaded");
		this.siteHeader = $(".site-header"); //created new property. Grabing site-header element
		this.headerTriggerElement = $(".large-hero__title"); //grabbing large-hero__title element
		this.createHeaderWaypoint(); // calling our newly created method
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a"); //dom property that stores all header links
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load',function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
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

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({ //creating new waypoint obj for each section
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "18%"
			});

			new Waypoint({ //creating new waypoint obj for each section
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;