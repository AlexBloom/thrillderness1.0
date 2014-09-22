


$(document).ready(function () {

		// Fire LocalScroll
		$('body').localScroll();
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen').css('min-height',$(window).height());
		$('.article-slider').css('min-height',$(window).height());

		$(window).resize(function() {
			$('.full-screen').css('min-height',$(window).height());
			$('.article-slider').css('min-height',$(window).height());
		});
		
		
	
	
	//Menu Toggle
	//$('#primary').prepend('<div id='menu-icon'>TFI SANDBOX <span> </span> </div>');
	$('#site-nav').addClass('closed');
	$('body').addClass('menu-closed');

   
	$('#menu-toggle').click(function(){
		$(this).toggleClass('active');
	$('#site-nav').toggleClass('closed');
	$('#site-nav').toggleClass('open');
	$('body').toggleClass('menu-open');
	$('body').toggleClass('menu-closed');
	$('body').toggleClass('overflow-hidden');
	  });
	
	  
  	$('body').click(function(){
  		//$('#site-nav').addClass('closed');
  		//$('#site-nav').removeClass('open');
		//$('body').removeClass('menu-open');
		//$('body').addClass('menu-closed');
		$('#menu-toggle').removeClass('close');
		$('body').removeClass('overflow-hidden')
  	 });
   
   
   //Show Top Link After Scrolling
   $('#top').addClass('fadeout')
   $(window).scroll(function() {
       var y_scroll_pos = window.pageYOffset;
       var scroll_pos_test = 400;             
   	// set to whatever you want it to be
       if(y_scroll_pos > scroll_pos_test) {
   	   $('#top').addClass('fadein');
	   $('#top').removeClass('fadeout');
       }
   	else
   	{
		$('#top').removeClass('fadein');
   		$('#top').addClass('fadeout');
   	}
   });
   
   
   //Fire Swipe Classes for Sliders
   window.orgfigures = $('#orgfigures').Swipe().data('Swipe');
   window.grantacc = $('#grantacc').Swipe().data('Swipe');
   window.highlightedgrantees = $('#highlighted-grantees').Swipe().data('Swipe');


});
   
