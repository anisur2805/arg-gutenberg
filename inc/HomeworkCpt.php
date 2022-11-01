<?php
function homework_setup_post_type() {
    register_post_type(
		'homework',
		array(
			'labels' => array(
				'name' => __( 'Homework' ),
				'singular_name' => __( 'Homework' )
			),
			'public' => true,
			'has_archive' => true,
			'supports' => array( 'title', 'editor' ), // New
			'show_in_rest' => true,          // New
		)
	);
}
add_action( 'init', 'homework_setup_post_type' );


// Add a Homework block category.
function my_block_categories( $categories, $post ) {
	// die("Hello");
	return array_merge(
		$categories,
		array(
			'slug'  => 'homework',
			'title' => 'Homework',
		)
	);
}
add_filter( 'block_categories_all', 'my_block_categories', 10, 2);