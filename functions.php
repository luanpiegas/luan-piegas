<?php
/**
 * Luan Piegas theme functions.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'wp_enqueue_scripts', 'luanpiegas_enqueue_assets' );
function luanpiegas_enqueue_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style(
		'luan-piegas',
		get_stylesheet_uri(),
		array(),
		$version
	);
	wp_enqueue_script(
		'luan-piegas-theme-toggle',
		get_theme_file_uri( 'assets/theme-toggle.js' ),
		array(),
		$version,
		true
	);
}

/**
 * Inline script as early as possible to apply the saved theme before paint.
 */
add_action( 'wp_head', 'luanpiegas_theme_init_script', 0 );
function luanpiegas_theme_init_script() {
	echo "<script>try{var t=localStorage.getItem('lp-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}</script>\n";
}
