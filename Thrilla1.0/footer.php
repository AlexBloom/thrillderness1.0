<?php
	/*-----------------------------------------------------------------------------------*/
	/* This template will be called by all other template files to finish 
	/* rendering the page and display the footer area/content
	/*-----------------------------------------------------------------------------------*/
?>

</div> <!-- / end page container, begun in the header -->

<footer id="site-footer" role="contentinfo">
	<hr>
	<div class="two-columns clearfix">
		<div class="first-half">
			<p>Here to make a world worth living in.</p>
		</div>
		<div class="second-half">
			<a href="mailto:info@thrillderness.org">info@thrillderness.org</a><br>
			<form>
				<p>Mailchimp Signup Form Will go Here</p>
			</form>
		</div>
	</div>
	<hr>
	<div class="single-column">
		<small>Credit is cool, but copyright is an antiquated ideal. All content is open source and free for the sharing. </small>
	</div>

</footer><!-- #site-footer -->

<?php wp_footer(); 
// This fxn allows plugins to insert themselves/scripts/css/files (right here) into the footer of your website. 
// Removing this fxn call will disable all kinds of plugins. 
// Move it if you like, but keep it around.
?>


<script src="<?php echo get_template_directory_uri(); ?>/js/main.js" type="text/javascript"></script>

</body>
</html>
