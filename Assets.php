<?php

/**
 * Enqueue admin editor JavaScript and CSS
 */
function arg_enqueue_scripts() {
	wp_enqueue_script(
		'arg-gutenberg-script',
		plugins_url('build/index.js', __FILE__),
		['wp-plugins', 'wp-blocks', 'wp-editor', 'wp-edit-post', 'wp-i18n', 'wp-element', 'wp-components', 'wp-data']
	);

	wp_enqueue_script(
		'rtc-blog', 
		plugins_url('rtc-blog.js', __FILE__),
		[ 'wp-blocks' ]
	);

	wp_enqueue_script(
		'arg-static-block', 
		plugins_url('static-block.js', __FILE__),
		[ 'wp-blocks', 'wp-element' ]
	);

	wp_enqueue_style(
		'my-block-editor-css',
		plugins_url('assets/css/editor.scss', __FILE__),
		['wp-edit-blocks'],
		filemtime(plugin_dir_path(__FILE__) . 'assets/css/editor.scss')
	);
}
// Hook the enqueue functions into the admin editor
add_action('enqueue_block_editor_assets', 'arg_enqueue_scripts');

add_action('wp_enqueue_scripts', function () {
	wp_enqueue_style(
		'arg-gutenberg-style-css',
		plugins_url('assets/css/style.scss', __FILE__),
		[],
		false,
		'all'
	);
});

add_action('admin_enqueue_scripts', function () {
	wp_enqueue_style(
		'arg-gutenberg-editor-style-css',
		plugins_url('assets/css/editor.scss', __FILE__),
		[],
		false,
		'all'
	);
});


/**
 * Enqueue frontend JavaScript and CSS
 */
function my_block_plugin_scripts() {

	// Enqueue block editor styles
	// wp_enqueue_style(
	// 	'my-block-css',
	// 	plugins_url('/blocks/custom-block/styles.css', __FILE__),
	// 	[]
	// );

	wp_enqueue_style(
		'arg-block-style',
		plugins_url('block-style.css', __FILE__),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'block-style.css' )
	);

}

// Hook the enqueue functions into the frontend and editor
add_action('enqueue_block_assets', 'my_block_plugin_scripts');


add_action('init', function () {
	register_block_type('arg-gutenberg-blocks/call-to-action', [
		'style' => 'arg-gutenberg-style-css',
		'editor_style' => 'arg-gutenberg-editor-style-css',
		'editor_scripts' => 'arg-gutenberg-script',
	]);
});