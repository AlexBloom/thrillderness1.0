


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
	$('#primary-nav').addClass('closed');
	$('#main').addClass('menu-closed');

   
	$('#toggle').click(function(){
		$(this).toggleClass('close');
	$('#primary-nav').toggleClass('closed');
	$('#primary-nav').toggleClass('open');
	$('#main').toggleClass('menu-open');
	$('#main').toggleClass('menu-closed');
	$('body').toggleClass('overflow-hidden');
	  });
	
	  
  	$('#main').click(function(){
  		$('#primary-nav').addClass('closed');
  		$('#primary-nav').removeClass('open');
		$('#main').removeClass('menu-open');
		$('#main').addClass('menu-closed');
		$('#toggle').removeClass('close');
		$('body').removeClass('overflow-hidden')
  	 });
   
	$('#primary-nav a').click(function(){
	//$('#primary-nav').toggleClass('closed');
	//$('#primary-nav').toggleClass('open');
  	});

   /* $('#main').click(function(){
        var navopen = window.pageYOffset;
        var scroll_pos_test = 400;             
    	// set to whatever you want it to be
        if(y_scroll_pos = scroll_pos_test) {
    	   $('#top').addClass('fadein');
 	   $('#top').removeClass('fadeout');
        }
    	else
    	{
 		$('#top').removeClass('fadein');
    		$('#top').addClass('fadeout');
    	}
    });*/
   
   
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
   
  /*
   //Close Secondary & Tertiary Links
   $('.secondary').addClass('visuallyhidden');
   //$('.tertiary').addClass('visuallyhidden');
   
   //Open Specific Secondary Menus
   $('#discover').click(function(){
	   $('#discover-secondary').toggleClass('visuallyhidden');
   });
   
   $('#participate').click(function(){
	   $('#participate-secondary').toggleClass('visuallyhidden');
   });
   
   $('#build').click(function(){
	   $('#build-secondary').toggleClass('visuallyhidden');
   });
   
   //Open Specific Tertiary Menus
   
   */
   
   
   
   //Open and Close Projects
$('.project-content').addClass('collapsed');
       
	   $('#project-1 .project-header').click(function() {
           $('#project-1 .project-content').toggleClass('collapsed');
       });
	   


});
   
