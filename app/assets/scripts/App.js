import MobileMenu from './modules/MobileMenu' //MobileMenu is just a var name,its name can be anything.but to stay organized name it same as name of the class
//We cant just import above module, we have to create an obj that uses this MobileMenu class as a blueprint

import RevealOnScroll from './modules/RevealOnScroll'

var mobileMenu = new MobileMenu(); //new MobileMenu(); creates new obj and constructor func is called
var revealOnScroll = new RevealOnScroll(); //creating a new obj/instance of RevealOnScroll class
