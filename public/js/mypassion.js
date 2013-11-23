/*
 * Copyright (c) 2013 MyPassion
 * Author: MyPassion 
 * This file is made for CURRENT TEMPLATES
*/

	

// ----------------------------------------------------  CONTACT FORM
function submitForm(){
	"use strict";
	var msg;
	$.post('plugin/sendmail.php',jQuery('#contactForm').serialize(), function(msg) {
		jQuery(".alertMessage").html(msg);
	});
	// Hide previous response text
	jQuery(msg).remove();
	// Show response message
	contactform.prepend(msg);
}



// -----------------------------------------------------  LOADING
window.onload=function() {
	jQuery('.slider-wrap').css('opacity',1);
}



jQuery(document).ready(function(){
		
	"use strict";	



// -----------------------------------------------------  UI ELEMENTS	
	if(jQuery().accordion) {
		jQuery( ".accordion" ).accordion({
			heightStyle: "content"
		});
		
		jQuery( ".tabs" ).tabs();
	
		jQuery("[rel=tooltip]").tooltip();
	}



// -----------------------------------------------------  MENU
	if(jQuery().superfish){
		jQuery('ul.sf-menu').superfish({
			delay:       100,                            // one second delay on mouseout
			speed:       'fast',                          // faster animation speed
			autoArrows:  true                            // disable generation of arrow mark-up	
		});	
	}




// -----------------------------------------------------  DEVICE MENU TOGGLE
	jQuery('.nav-toggle a').click(function(){
		jQuery('.mobile-menu').stop(true,true).slideToggle(500);
		return false;
	});
	jQuery('.mobile-menu ul li a').prepend('<i class="icon-right-dir"></i>');
	
	jQuery('.menu li a').click(function(){
		jQuery('.mobile-menu').stop(true,true).fadeOut(500);
		return false;
	});



// -----------------------------------------------------  PORTFOLIO HOVER EFFECT
	var currentWindowWidth = jQuery(window).width();
	
	jQuery('div.maskImage').css({opacity:0, top:0});
	if(currentWindowWidth >= 979){
		jQuery('.portfolio-item, .item, .image-wrap').mouseenter(function(e) {
			jQuery(this).find('.maskImage').animate({ opacity:1}, 200);
			jQuery(this).find('.maskImage a span').animate({ top:'40%'}, 200);
		}).mouseleave(function(e) {
			jQuery(this).find('.maskImage').animate({ opacity:0}, 200);
			jQuery(this).find('.maskImage a span').animate({ top:-48+"px"}, 200);
		});
	}



// ----------------------------------------------------- PRETTY PHOTO
	if(jQuery().prettyPhoto){
		jQuery("a[rel^='bookmark']").prettyPhoto({
			slideshow:5000,
			show_title: true,
		});
	}	
	
	

// -----------------------------------------------------  FITVIDS	
	if(jQuery().fitVids){
		jQuery(".videos").fitVids();
	}
	


// -----------------------------------------------------  TWITTER FEED	
	if(jQuery().tweet) {
		jQuery('.twitterfeed').tweet({
			join_text: false,
			username: "formythemes", // Change username here
			modpath: './js/twitter/', // Twitter files path
			avatar_size: false, // you can active avatar
			count: 2, // number of tweets
			loading_text: "Loading tweets...",
			seconds_ago_text: "%d seconds ago: ",
			a_minutes_ago_text: "a minute ago: ",
			minutes_ago_text: "%d minutes ago: ",
			a_hours_ago_text: "an hour ago: ",
			hours_ago_text: "%d hours ago: ",
			a_day_ago_text: "a day ago: ",
			days_ago_text: "%d days ago: ",
			view_text: "view tweet on twitter"
		});
	}



// -----------------------------------------------------  HEADER & SLIDER - HEIGHT
	function header() {
		var headerHeight = jQuery("#header").outerHeight();
		var windowHeight = jQuery(window).height() - headerHeight;
		var half = jQuery(window).height()/2 - 120;
		
		
		var header = jQuery(".slider-wrap");
		var text = jQuery(".slider-wrap .stunningtext");
		var btn = jQuery(".slider-wrap .slider_button");
		var search = jQuery(".slider-wrap .search");
		
		
		
		header.css("height",windowHeight+"px");
		text.css('top', half+"px");
		btn.css('top', half+'px');
		search.focus ();

	}

// -----------------------------------------------------  TEXT SLIDE	
	function textCycle(){
		if(jQuery().cycle){
			jQuery('.stunningtext').cycle({
				fx: 'fade',
				timeout:5000, 
			});	
		}
	}
	
	header();
	// textCycle();
	 
	jQuery(window).resize(function(){
		header();
		// textCycle();
	});


// -----------------------------------------------------  CYCLE TWITTER	
	jQuery(window).load(function() {
		jQuery('.twitterfeed ul').cycle({
			fx: 'fade',
			timeout:5000, 
			prev:    '.p-prev',
        	next:    '.p-next'

		});
	});



// -----------------------------------------------------  PAGE SCROLL	
	jQuery('ul.sf-menu li a').bind('click',function(event){
		jQuery('ul.sf-menu li a').removeClass("current");
		jQuery(this).addClass("current");
		var $anchor = jQuery(this);
	
		jQuery('html, body').stop().animate({
			scrollTop: jQuery($anchor.attr('href')).offset().top - 50
		}, 1500,'easeInOutExpo');
		event.preventDefault();
	});
	
	jQuery('.menu-device ul li a').bind('click',function(event){
		var $anchor = jQuery(this);
		jQuery('.menu-device').stop().slideToggle(500);
	
		jQuery('html, body').stop().animate({
			scrollTop: jQuery($anchor.attr('href')).offset().top - 50
		}, 1500,'easeInOutExpo');
		event.preventDefault();
	});



// -----------------------------------------------------  PAGE SCROLL	
	jQuery('ul.menu li a').bind('click',function(event){
		jQuery('ul.menu li a').removeClass("current");
		jQuery(this).addClass("current");
		var $anchor = jQuery(this);
	
		jQuery('html, body').stop().animate({
			scrollTop: jQuery($anchor.attr('href')).offset().top - 650
		}, 1500,'easeInOutQuart');
		event.preventDefault();
	});
	
	jQuery('.menu-device ul li a').bind('click',function(event){
		var $anchor = jQuery(this);
		jQuery('.menu-device').stop().slideToggle(500);
	
		jQuery('html, body').stop().animate({
			scrollTop: jQuery($anchor.attr('href')).offset().top - 650
		}, 1500,'easeInOutQuart');
		event.preventDefault();
	});



// -----------------------------------------------------  NAV MOVEMENT
	var winWidth = jQuery(window).width();
	
	if( winWidth > 979 ){
		jQuery("#topbar").sticky({ topSpacing: 0});	
	}



// -----------------------------------------------------  COOLCAROUSEL
	var $item_number = 3;
	
	if( winWidth < 979 ){$item_number = 1}
	
	jQuery("#foo2").carouFredSel({
	    circular: true,
	    infinite: false,
	    auto: {
				timeoutDuration : 8000,
				duration:1500
			},
		width   : "100%",
	    scroll  : $item_number,
	    pagination  : "#foo2_pag"

	});

	
	
// -----------------------------------------------------  GOOGLE MAP		
	jQuery(document).ready(function(){ 
		var myLatlng = new google.maps.LatLng(-34.397, 150.644);
		var myOptions = {
		  center: myLatlng,
		  zoom: 8,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  scrollwheel: false
		};
		var map = new google.maps.Map(document.getElementById("map"),  myOptions);
		var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title:"Click Me for more info!"
		});
		
		var infowindow = new google.maps.InfoWindow({});
		
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent("Write here some description"); //sets the content of your global infowindow to string "Tests: "
			infowindow.open(map,marker); //then opens the infowindow at the marker
		});
		marker.setMap(map);
	});
});
