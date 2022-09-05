<?php 
/**
 * Enqueue admin editor JavaScript and CSS
 */
function arg_enqueue_scripts() {
	wp_enqueue_script(
		'arg-gutenberg-script',
		plugins_url('build/index.js', __FILE__),
		['wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-element', 'wp-components', 'wp-data']
	);

	wp_enqueue_style(
		'my-block-editor-css',
		plugins_url('src/editor-styles.scss', __FILE__),
		['wp-edit-blocks'],
		filemtime(plugin_dir_path(__FILE__) . 'blocks/custom-block/editor-styles.css')
	);
}
// Hook the enqueue functions into the admin editor
add_action('enqueue_block_editor_assets', 'arg_enqueue_scripts');


/**
 * Enqueue frontend JavaScript and CSS
 */
function my_block_plugin_scripts() {

	// Enqueue block editor styles
	wp_enqueue_style(
		'my-block-css',
		plugins_url('/blocks/custom-block/styles.css', __FILE__),
		[],
		filemtime(plugin_dir_path(__FILE__) . 'blocks/custom-block/styles.css')
	);
}

// Hook the enqueue functions into the frontend and editor
// add_action('enqueue_block_assets', 'my_block_plugin_scripts');
