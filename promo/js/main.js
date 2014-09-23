
$(document).ready(function () {

		// Fire LocalScroll
		$('body').localScroll();
	
		$.stellar()
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen-container').css('min-height',$(window).height());

		$(window).resize(function() {
			$('.full-screen-container').css('min-height',$(window).height());
		});

	$('.mc-address-group').addClass('hidden');
   	$('#open-address-group').click(function(){
   		$('.mc-address-group').removeClass('hidden');
   	 });
	 
	 
	 //#intro{ }
	 //.image-mask{ }


 });