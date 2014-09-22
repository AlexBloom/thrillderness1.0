<?php
	/*-----------------------------------------------------------------------------------*/
	/* This template will be called by all other template files to finish 
	/* rendering the page and display the footer area/content
	/*-----------------------------------------------------------------------------------*/
?>

</div> <!-- / end page container, begun in the header -->

	<footer id="site-footer" role="contentinfo">
		<div class="col2wide clearfix">
			<div>
				<h5>Contact</h5>
				<nav id="big-email" class="clearfix">
					<ul>
						<li><strong>General Specifics:</strong><br>
							<a href="mailto:aloha@thrillderness.org">aloha@thrillderness.org</a>
						</li>
						<li><strong>Contributions:</strong><br>
							<a href="mailto:dropin@thrillderness.org">dropin@thrillderness.org</a>
						</li>
					</ul>
				</nav>				
			</div>		
			<div>
				<!-- Begin MailChimp Signup Form -->
				<div id="mc_embed_signup">
					<h5>Thrilldernews</h5>
					<form action="http://thrillderness.us3.list-manage.com/subscribe/post?u=5f27a954a3e91c470832a2ec7&amp;id=d8e1ac1bff" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
						
						<div class="mc-field-group" id="emailaddress">
							<input type="email" value="" name="EMAIL" placeholder="your email address" class="required email" id="mce-EMAIL">
						</div>
					
					    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
					    <div style="position: absolute; left: -5000px;"><input type="text" name="b_5f27a954a3e91c470832a2ec7_d8e1ac1bff" value=""></div>
						<div class="clear" id="submitemail">
							<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
						</div>
					</form>
				</div>
				<p> For interesting, free stuff in your mailbox occasionally&mdash;<a href="thrillderness.org/contact"> join The Thrillderness Post.</a> </p>		
			</div>
		</div>

		<nav id="footer-secondary" class="clearfix">
			<small id="social">
				<a href="http://instagram.com/thrillderness"target=_blank> <span class="icon icon-instagram"></span> </a>
				<a href="http://twitter.com/thrillderness"target=_blank>   <span class="icon icon-twitter"></span></a>
				<a href="http://facebook.com/thrillderness"target=_blank>  <span class="icon icon-facebook"></span> </a>
				<a href="http://vimeo.com/thrillderness"target=_blank>     <span class="icon icon-vimeo"></span> </a>
			</small>
			<small id="signature">
				Vive Ut Vivas
			</small>
			<small id="copyright">
				<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"> Thrillderness </span> <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"> C.C. Non-Commercial </a> 2014 &ndash; Beyond.
			</small>
			
		</nav>
	</footer><!-- #site-footer -->

<?php wp_footer(); 
// This fxn allows plugins to insert themselves/scripts/css/files (right here) into the footer of your website. 
// Removing this fxn call will disable all kinds of plugins. 
// Move it if you like, but keep it around.
?>

 	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>


<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.scrollTo.min.js" type="text/javascript"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.localScroll.min.js" type="text/javascript"></script>

<script src="<?php echo get_template_directory_uri(); ?>/js/swipe.js" type="text/javascript"></script>	
<script src="<?php echo get_template_directory_uri(); ?>/js/main.js" type="text/javascript"></script>

	<script>
	    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
	    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
	    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	    s.parentNode.insertBefore(g,s)}(document,'script'));
	</script>

</body>
</html>
