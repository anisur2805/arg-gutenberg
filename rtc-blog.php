<?php

function rtc_dynamic_render_callback() {
    // die("hello");
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => -1,
        'post_status' => 'publish',
        'post_type'   => 'post'
    ) );

    if( count( $recent_posts ) === 0 ) {
        return '<p>No Posts</p>';
    }

    // var_dump( $recent_posts );

    $output = '<div class="rtc-post-wrapper">';
    foreach( $recent_posts as $post ) {
        // var_dump( $post );
        $post_id = $post['ID'];
        $post_thumbnail_url = get_the_post_thumbnail_url( $post_id, 'full');
        $dummy_thumbnail_url = 'http://localhost:10003/wp-content/uploads/2022/10/hoodie-with-zipper-2.jpg';
        $output .= '<div class="rtc-single-post">';
        if( has_post_thumbnail( $post_id ) ) {
            $output .= '<img src="'. $post_thumbnail_url .'" />';
        } else {
            $output .= '<img src="'. $dummy_thumbnail_url .'" />';
        }
        $output .= '<div class="post-title"><h3><a href="'. get_permalink( $post_id ).'">' . get_the_title( $post_id ). '</a></h3></div>';
        $output .= '<div class="post-content">'. get_the_content( $post_id ) .'</div>';
        $output .= '<a href="'. get_permalink( $post_id ) .'">' .__('Read More') .'</a></div>';
    }
    $output .= "</div>";
    return $output;
}

function rtc_example_dynamic() {
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'rtc-example-dynamic', 
        plugins_url( 'build/block.js', __FILE__ ),
        $asset_file[ 'dependencies' ],
        $asset_file[ 'version' ]
    );

    register_block_type( 'rtc/blog', array(
        // 'editor_script' => 'rtc-example-dynamic',
        'render_callback' => 'rtc_dynamic_render_callback'
    ) );
}

add_action( 'init', 'rtc_example_dynamic' );

// Register feature image for rest api support
add_action( 'rest_api_init', 'rtc_register_feature_image' );
function rtc_register_feature_image() {
    register_rest_field( 
        array( 'post' ),
        'rtc_feature_image',
        array(
            'get_callback'    => 'rtc_get_rest_feature_image',
            'update_callback' => null,
            'schema'          => null
        )
     );
}

function rtc_get_rest_feature_image( $object, $field_name, $request ) {
    if( $object[ 'featured_media' ] ) {
        $img = wp_get_attachment_image_src( $object[ 'featured_media' ], 'full' );
        return $img[0];
    }

    return false;
}