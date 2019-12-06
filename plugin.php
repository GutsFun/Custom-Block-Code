<?php
/**
 * Plugin Name: Custom Block Code
 * Author: Cyrille Perrot
 * Version: 1.0.0
 *
 * Description: Gutenberg Custom Block assets for code highlighting.
 *
 * @since   1.0.0
 * @package gutsfun
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the block's assets for the editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's. text.
 * `wp-editor`: includes the WordPress Editor blocks.
 *
 * @since 1.0.0
 */
function custom_block_code_backend_assets() {
  // Scripts.
  wp_enqueue_script(
    'custom-block-code',
    plugins_url('block.js', __FILE__),
    array('wp-blocks','wp-editor','wp-i18n','wp-element','wp-block-library'),
    filemtime( plugin_dir_path( __FILE__ ).'block.js' )
  );
}

// Hook: Editor assets.
add_action('enqueue_block_editor_assets', 'custom_block_code_backend_assets');

/**
 * Enqueue the block's assets for the frontend.
 *
 * @since 1.0.0
 */
function custom_block_code_frontend_assets() {
  // Styles.
  wp_enqueue_style(
    'custom-block-code-css',
    plugins_url( 'style.css', __FILE__ ),
    array( 'wp-editor' ),
    filemtime( plugin_dir_path( __FILE__ ).'style.css' )
  );
}

// Hook: Frontend assets.
add_action('enqueue_block_assets', 'custom_block_code_frontend_assets');