<?php
/**
 * The template for displaying the home/index page.
 * This template will also be called in any case where the Wordpress engine 
 * doesn't know which template to use (e.g. 404 error)
 */

get_header(); // This fxn gets the header.php file and renders it ?>
	<div id="primary" class="row-fluid">
		<div id="content-index" role="main" class="span12">
			
			<h1 class="site-description">
				<?php bloginfo( 'description' ); // Display the blog description, found in General Settings ?>
			</h1>

			<?php if ( have_posts() ) : 
			// Do we have any posts in the databse that match our query?
			// In the case of the home page, this will call for the most recent posts 
			?>

				<?php while ( have_posts() ) : the_post(); 
				// If we have some posts to show, start a loop that will display each one the same way
				?>
				
					<article  id="post-<?php the_ID(); ?>" <?php post_class('post grid-unit'); ?> style="background-image:url(
								<?php 
								$image = get_field('featured_thumbnail');?>
									<?php echo $image['url']; ?>		
							);">
							
							<div class="category clearfix">
								<?php echo get_the_category_list(); // Display the categories this post belongs to, as links ?>
							</div>
							
							<a class="content-wrap" href="<?php the_permalink(); // Get the link to this post ?>">
								
									
							<h3 class="title"> <?php the_title(); // Show the title of the posts as a link ?> </h3>						
							<p class="subtitle"><?php the_field('the_subtitle'); ?></p>
							</a>
							
							<div class="post-date">
								<?php the_time('m.d.Y'); // Display the time published ?>
							</div>
							<div class="post-author">
								<?php  the_author();  ?> 
							</div>
							<div class="post-comments">
								<?php if( comments_open() ) : // If we have comments open on this post, display a link and count them ?>
										<span class="comments-link">
											<?php comments_popup_link( __( 'Comment', 'break' ), __( '1 Comment', 'break' ), __( '% Comments', 'break' ) ); 
											// Display the comment count with the applicable pluralization
											?>
										</span>
									<?php endif; ?>
							</div>
					
						
					</article>
					

				<?php endwhile; // OK, let's stop the posts loop once we've exhausted our query/number of posts ?>
				
				<!-- pagination -->
				<div id="pagination" class="clearfix">
					<div class="past-page"><?php previous_posts_link( 'newer' ); // Display a link to  newer posts, if there are any, with the text 'newer' ?></div>
					<div class="next-page"><?php next_posts_link( 'older' ); // Display a link to  older posts, if there are any, with the text 'older' ?></div>
				</div><!-- pagination -->


			<?php else : // Well, if there are no posts to display and loop through, let's apologize to the reader (also your 404 error) ?>
				
				<article class="post error">
					<p class="404">You have reached a content wilderness area. Best use your wits.</p>
				</article>

			<?php endif; // OK, I think that takes care of both scenarios (having posts or not having any posts) ?>
		</div><!-- #content .site-content -->
	</div><!-- #primary .content-area -->
	
	
	
<?php get_footer(); // This fxn gets the footer.php file and renders it ?>