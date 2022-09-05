<?php

function arg_register_meta_fields() {
	register_meta(
		'post',
		'_arg_gutenberg_text_field',
		[
			'show_in_rest'      => true,
			'type'              => 'string',
			'single'            => true,
			'sanitize_callback' => 'sanitize_text_string',
			'auth_callback'     => function () {
				return current_user_can( 'edit_posts' );
			},
		]
	);
	register_meta(
		'post',
		'_arg_gutenberg_email_field',
		[
			'show_in_rest'      => true,
			'type'              => 'string',
			'single'            => true,
			'sanitize_callback' => 'sanitize_email_string',
			'auth_callback'     => function () {
				return current_user_can( 'edit_posts' );
			},
		]
	);
	register_meta(
		'post',
		'_arg_gutenberg_phone_field',
		[
			'show_in_rest'      => true,
			'type'              => 'string',
			'single'            => true,
			'sanitize_callback' => 'sanitize_phone_string',
			'auth_callback'     => function () {
				return current_user_can( 'edit_posts' );
			},
		]
	);

	register_meta(
		'post',
		'_arg_gutenberg_select_field',
		[
			'show_in_rest'      => true,
			'type'              => 'string',
			'single'            => true,
			'sanitize_callback' => 'sanitize_select_string',
			'auth_callback'     => function () {
				return current_user_can( 'edit_posts' );
			},
		]
	);

	register_meta(
		'post',
		'_arg_gutenberg_bio_field',
		[
			'show_in_rest'      => true,
			'type'              => 'string',
			'single'            => true,
			'sanitize_callback' => 'sanitize_bio_string',
			'auth_callback'     => function () {
				return current_user_can( 'edit_posts' );
			},
		]
	);

	register_meta(
		'post',
		'_arg_gutenberg_toggle_field',
		[
			'show_in_rest'      => true,
			'type'              => 'boolean',
			'default'           => false,
			'single'            => true,
			'sanitize_callback' => 'sanitize_phone_string',
			'auth_callback'     => function () {
				return current_user_can( 'edit_posts' );
			},
		]
	);
}

add_action( 'init', 'arg_register_meta_fields' );