


$(document).ready(function () {
		// Fire LocalScroll
		$('body').localScroll({offset:-50});
		$('.main').localScroll({offset:-75});
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen').css({height:$(window).height()});
		$(window).resize(function() {
			$('.full-screen').css({height:$(window).height()});
		});
	
	
	//Site-Nav Toggle
	$('#site-nav').addClass('closed');
	$('#site-nav').addClass('overlay');
	$("#toggle-nav").click(function(){
		$(this).toggleClass('active');
	$('#site-nav').toggleClass('closed');
	$('#site-nav').toggleClass('open');
	
	$("#toggle-search").removeClass('active');
	$('#search').addClass('closed');
	$('#search').addClass('overlay');
	$('#search').removeClass('open');
	$('body').toggleClass('overflow-hidden');
   });
   
	//Search Toggle
	$('#search').addClass('closed'); 
	$("#toggle-search").click(function(){
		$(this).toggleClass('active');
	$('#search').toggleClass('closed');
	$('#search').toggleClass('open');
	
	$("#toggle-nav").removeClass('active');
	$('#site-nav').addClass('closed');
	$('#site-nav').removeClass('open');
	$('body').toggleClass('overflow-hidden');
	  });
   
   //Tertiary Dropdown Toggle
	//$('.tertiary').addClass('dropdown-closed'); 
	$(".tertiary").click(function(){
		$(this).toggleClass('dropdown-open');
	  });
   
   // Hide / Show Header on Scroll - Credit: Marius Craciunoiu
   $('#site-header').addClass('nav-show');
   // Hide Header on on scroll down
   var didScroll;
   var lastScrollTop = 0;
   var delta = 5;
   var navbarHeight = $('header').outerHeight();

   $(window).scroll(function(event){
       didScroll = true;
   });

   setInterval(function() {
       if (didScroll) {
           hasScrolled();
           didScroll = false;
       }
   }, 250);

   function hasScrolled() {
       var st = $(this).scrollTop();
    
       // Make sure they scroll more than delta
       if(Math.abs(lastScrollTop - st) <= delta)
           return;
    
       // If they scrolled down and are past the navbar, add class .nav-up.
       // This is necessary so you never see what is "behind" the navbar.
       if (st > lastScrollTop && st > navbarHeight){
           // Scroll Down
           $('#site-header').removeClass('nav-show').addClass('nav-hide');
		  // $('.breadcrumb').removeClass('nav-show').addClass('nav-hide');
		   
       } else {
           // Scroll Up
           if(st + $(window).height() < $(document).height()) {
               $('#site-header').removeClass('nav-hide').addClass('nav-show');
			   //$('.breadcrumb').removeClass('nav-hide').addClass('nav-show');
			   
           }
       }
    
       lastScrollTop = st;
   }
   
   
   
   
   //Show Top Link After Scrolling
   $("#top").addClass('closed');
   $(window).scroll(function() {
       var y_scroll_pos = window.pageYOffset;
       var scroll_pos_test = 300;             
   	// set to whatever you want it to be
       if(y_scroll_pos > scroll_pos_test) {
   	   $("#top").addClass('open');
	   $("#top").removeClass('closed');
       }
   	else
   	{
		$("#top").removeClass('open');
   		$("#top").addClass('closed');
   	}
   });
   
   //Open and Close Projects 

$('.project-content').addClass('collapsed');
    
$('.local-link').each(function() {
	$(this).click(function(){
		$(this).parent().parent().parent().parent().next('.project-content').toggleClass('collapsed');
		//$(this).parent().parent().toggleClass('open');
		$(this).find('.icon-plus').toggleClass('open');
	});
});
	
// Sticky Navigations	
	
 $('.left-column').waypoint(
  function(direction) {   
    // This div is level with the top  
    if(direction == 'down'){
     $('.sticky').addClass('fixed');
    } //find('.waypoint-inner')
      else  $('.sticky').removeClass('fixed');
  },
  {
	 offset: 50
 }
);
	

	
	
	
	
	
	   
   // Add Current Class to ScrollNav of Currently Depressed Item
    	$('.scrollnav-link').click(function() {
    		$('.scrollnav-link').removeClass('current');
    		$(this).addClass('current');
    	});	   
	 
	 
	 
	 
	 
	 
	 
  //Side Nav The Long Hard Stupid Way  
  
 

// Show and Play Full Screen Videos
	$(".play-video").click(function(){
		$('.video-overlay').css("display","block");
		$('#header').css("display","none");
	});

	$(".close-video").click(function(){
		$('.video-overlay').css("display","none");
		$('#header').css("display","block");
	});
 
 
 
 //End Doc Ready Function

});
   
   


