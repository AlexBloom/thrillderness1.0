<?php
	/*-----------------------------------------------------------------------------------*/
	/* This template will be called by all other template files to begin 
	/* rendering the page and display the header/nav
	/*-----------------------------------------------------------------------------------*/
?>
<!DOCTYPE html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="viewport" content="width = device-width, initial-scale=1, maximum-scale=1, user-scalable = no">
<title>
	<?php bloginfo('name'); // show the blog name, from settings ?> | 
	<?php is_front_page() ? bloginfo('description') : wp_title(''); // if we're on the home page, show the description, from the site's settings - otherwise, show the title of the post or page ?>
</title>
<meta name="description" content="Fostering adventure, reviving endangered knowledge, and building community — for the greater autonomy, health and happiness of human kind.">
<meta name="keywords" content="Thrillderness, Adventure, DIY, Interviews, Travel, Lifestyle, Health">

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php // We are loading our theme directory style.css by queuing scripts in our functions.php file, 
	// so if you want to load other stylesheets,
	// I would load them with an @import call in your style.css
?>

<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_head(); 
// This fxn allows plugins, and Wordpress itself, to insert themselves/scripts/css/files
// (right here) into the head of your website. 
// Removing this fxn call will disable all kinds of plugins and Wordpress default insertions. 
// Move it if you like, but I would keep it around.
?>

</head>

<body id="body"
	<?php body_class(); 
	// This will display a class specific to whatever is being loaded by Wordpress
	// i.e. on a home page, it will return [class="home"]
	// on a single post, it will return [class="single postid-{ID}"]
	// and the list goes on. Look it up if you want more.
	?>
>

<header id="site-header" class="clearfix" role="banner">
	<?php wp_nav_menu( array( 'theme_location' => 'page' ) ); // Display the user-defined menu in Appearance > Menus ?>	
	<div id="masthead" class="clearfix">
		
		<a id="menu-toggle" class="lines-button x2">
			<span class="lines"></span>
		</a>	
		<div id="brand">
			<h1 class="site-title">
				<a href="http://thrillderness.org/" title="Thrillderness" rel="home"><span class="icon-ThrilldernessWordmark"></span></a>
			</h1>
		</div><!-- #brand -->
		<nav role="navigation" id="site-nav">
			<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); // Display the user-defined menu in Appearance > Menus ?>
		</nav><!-- .site-navigation .main-navigation -->
		<a id="search-toggle"> 
	          <span class="icon-search"></span>
		</a>
	
		<div class="clearfix" id="search">			
	
			<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
				<label>
					<span class="screen-reader-text">Search for:</span>
				</label>
				<input type="search" class="search-field" placeholder="Seek &amp; Enjoy" value="" name="s" title="Search for:" />
				<input type="submit" class="search-submit" value="SHRED"/>
			</form>
	
		</div>
		

	</div>

	
	
	
	
	
		
</header><!-- #site-header -->
			


<div class="main-fluid"><!-- start the page containter -->