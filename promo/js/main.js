
$(document).ready(function () {

		// Fire LocalScroll
		$('body').localScroll({
			duration:800
		}
		
		);
	
		$.stellar()
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen-container').css('min-height',$(window).height());
		$('#logo-mask').css('padding-top',$(window).height()/5);
		$('#footer-info').css('padding-top',$(window).height()/3);

		$(window).resize(function() {
			$('.full-screen-container').css('min-height',$(window).height());
			$('#logo-mask').css('padding-top',$(window).height()/5);
			$('#footer-info').css('padding-top',$(window).height()/3);
		});

	$('.mc-address-group').addClass('hidden');
   	$('#open-address-group').click(function(){
   		$('.mc-address-group').removeClass('hidden');
   	 });
	 

 });