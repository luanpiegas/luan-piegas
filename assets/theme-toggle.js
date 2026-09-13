/**
 * Light / dark theme toggle. The OS preference applies when no manual
 * choice is stored; a manual choice is persisted in localStorage.
 */
( function () {
	var KEY = 'lp-theme';
	var root = document.documentElement;

	function current() {
		return root.getAttribute( 'data-theme' ) || 'system';
	}

	function apply( mode ) {
		if ( mode === 'system' ) {
			root.removeAttribute( 'data-theme' );
			try {
				localStorage.removeItem( KEY );
			} catch ( e ) {}
		} else {
			root.setAttribute( 'data-theme', mode );
			try {
				localStorage.setItem( KEY, mode );
			} catch ( e ) {}
		}
		var btn = document.getElementById( 'lp-theme-toggle' );
		if ( btn ) {
			btn.setAttribute( 'aria-pressed', mode === 'dark' ? 'true' : 'false' );
			btn.setAttribute(
				'aria-label',
				mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
			);
		}
	}

	document.addEventListener( 'DOMContentLoaded', function () {
		var btn = document.getElementById( 'lp-theme-toggle' );
		if ( ! btn ) {
			return;
		}
		apply( current() === 'system' ? 'system' : current() );
		btn.addEventListener( 'click', function () {
			var isDark;
			if ( current() === 'system' ) {
				isDark = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;
			} else {
				isDark = current() === 'dark';
			}
			apply( isDark ? 'light' : 'dark' );
		} );
	} );
} )();
