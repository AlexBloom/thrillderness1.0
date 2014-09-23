
$(document).ready(function () {

		// Fire LocalScroll
		$('body').localScroll({
			duration:1800
		}
		
		);
	
		$.stellar()
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen-container').css('min-height',$(window).height());
		$('#logo-mask').css('padding-top',$(window).height()-300);
		$('#arrow').css('left',$(window).width()/2-32);

		$(window).resize(function() {
			$('.full-screen-container').css('min-height',$(window).height());
			$('#logo-mask').css('padding-top',$(window).height()-300);
			$('#arrow').css('left',$(window).width()/2-32);
		});

	$('.mc-address-group').addClass('hidden');
   	$('#open-address-group').click(function(){
   		$('.mc-address-group').removeClass('hidden');
   	 });
	 
	 
	 
	 //#intro{ }
	 //.image-mask{ }


 });