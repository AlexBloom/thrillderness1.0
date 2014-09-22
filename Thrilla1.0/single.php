<?php
/**
 * The template for displaying any single post.
 *
 */

get_header(); // This fxn gets the header.php file and renders it ?>
	<div id="primary" class="row-fluid">
		<div id="content-single" role="main" class="">

			<?php if ( have_posts() ) : 
			// Do we have any posts in the databse that match our query?
			?>

				<?php while ( have_posts() ) : the_post(); 
				// If we have a post to show, start a loop that will display it
				?>

					<article class="post">
						
						<section class="full-bleed">
							<div class="image-wrap">
								<!-- Get the Featured Image -->
								<?php 
								$image = get_field('featured_image');
								if( !empty($image) ): ?>
									<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
								<?php endif; ?>
							</div>
							<section class="floating-text">
								<div class="category clearfix"><?php echo get_the_category_list(); // Display the categories this post belongs to, as links ?></div>
								<h1 class="title"><?php the_title(); // Display the title of the post ?></h1>
								<h2 class="subtitle"> <?php the_field('the_subtitle'); ?>	</h2>
							</section>
						</section>
						
						<section class="single-column">
						
							<div class="the-content">
								<?php the_content(); 
								// This call the main content of the post, the stuff in the main text box while composing.
								// This will wrap everything in p tags
								?>
							
								<?php wp_link_pages(); // This will display pagination links, if applicable to the post ?>
							</div><!-- the-content -->
						
							<div class="post-meta">
								<span class="author"><?php  the_author();  ?><span> 
								<span class="timestamp"><?php the_time('Y.m.d.');?></span>
								<div class="tags clearfix"><?php echo get_the_tag_list( '# &nbsp;', '&nbsp; # &nbsp;' ); // Display the tags this post has, as links separated by spaces and hashtags ?></div>				
							</div><!--/post-meta -->
						
							
								
								
							
						</section>
						
					</article>

				<?php endwhile; // OK, let's stop the post loop once we've displayed it ?>
				
				
				<section id="comments" class="single-column">
					<hr>					
					<?php
						// If comments are open or we have at least one comment, load up the default comment template provided by Wordpress
						if ( comments_open() || '0' != get_comments_number() )
							comments_template( '', true );
					?>
				</section>
				
				
				<!-- pagination -->
				<div id="pagination" class="clearfix">
					<div class="next-post"><?php next_post_link('%link','%title'); ?> </div>
					<div class="previous-post"><?php previous_post_link('%link','%title'); ?> </div>
				</div><!-- pagination -->

			<?php else : // Well, if there are no posts to display and loop through, let's apologize to the reader (also your 404 error) ?>
				
				<article class="post error">
					<p class="404">You have entered a content wilderness area. Better use your wits.</p>
				</article>

			<?php endif; // OK, I think that takes care of both scenarios (having a post or not having a post to show) ?>

		</div><!-- #content .site-content -->
	</div><!-- #primary .content-area -->
<?php get_footer(); // This fxn gets the footer.php file and renders it ?>
