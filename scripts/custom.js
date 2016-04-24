$(document).ready(function(){
	"use strict"

	resize_image();
	resize_hero();
	$(window).resize(function(){
		resize_image();
		resize_hero();
	});
	
	////////////////////////
	//Google Maps Settings//
	////////////////////////
	$('.map-activation').click(function(){
		$(this).fadeOut(300);
		return false;
	});

	function resize_image(){
		// for mobile
		if ($(window).width() < 640){
			$("#sphere").attr("src", "images/sphere-industries-mobile.jpg");
		} else {
			$("#sphere").attr("src", "images/sphere-industries.jpg");
		}
	}
	function resize_hero(){
		// for mobile
		if ($(window).width() < 640){
			$("#hero_image").attr("src", "images/general-fullslider/hands-coffee-smartphone-technology-mobile.jpg");
		} else if ($(window).width() < 1024) {
			$("#hero_image").attr("src", "images/general-fullslider/hands-coffee-smartphone-technology-tablet.jpg");
		} else {
			$("#hero_image").attr("src", "images/general-fullslider/hands-coffee-smartphone-technology.jpg");
		}
	}
	
	function initialize() {
	   var mapOptions = {
			   zoom: 14,
			   center: new google.maps.LatLng(40.7234228,-73.9931599),  
			   mapTypeId: google.maps.MapTypeId.ROADMAP
		   };
	 
	   var map = new google.maps.Map(document.getElementById('location-canvas'), mapOptions);
			
								  
	   var marker = new google.maps.Marker({
				map: map,
				draggable: false,
				position: new google.maps.LatLng(-37.817066, 144.955443)
		   });
	}
							
	google.maps.event.addDomListener(window, 'resize', initialize);
	google.maps.event.addDomListener(window, 'load', initialize);
	
	///////////////////////////////////////////////////////////////
    //Detect Operatiing System and Enable Smooth Scrolling != Mac//
	///////////////////////////////////////////////////////////////
	
	var OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	else if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	else if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
	
	if (OSName!="MacOS"){
		$.srSmoothscroll();
	}
	
	//////////////////////
	///Deploy Navigation//   
    //////////////////////
   
	$('.deploy-navigation').click(function(){
		$('.navigation').toggleClass('navigation-active');
		return false;
	});
	
	$('.navigation a').click(function(){
		//$('.navigation').removeClass('navigation-active'); 
	});
	
	///////////////////////////////
	///Scolling navigation system//
	///////////////////////////////
	
	$.scrollIt({
		upKey: 38,             // key code to navigate to the next section
	  	downKey: 40,           // key code to navigate to the previous section
		easing: 'easeInOutExpo',      // the easing function for animation
		scrollTime: 600,       // how long (in ms) the animation takes
		activeClass: 'active-navigation-item', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: -70           // offste (in px) for fixed top navigation
	});
		  

});
