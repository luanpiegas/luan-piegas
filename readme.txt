== Luan Piegas ==

Contributors: luanpiegas
Requires at least: 6.8
Tested up to: 7.1
Stable tag: 2.0.5
Requires PHP: 7.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html


== Description ==

A minimal block theme for a personal developer blog.

The front page is a quiet index: post titles with read-more links, newest first — no excerpts, no clutter, no color. A strict black-and-white palette adapts to the visitor's system setting, with a bulb toggle in the header for manual light/dark switching. Articles get a focused single-column layout with generous line length, plus careful styling for the things technical posts are full of: code blocks, inline code, tables, and blockquotes.


== Installation ==

1. Upload the theme folder to `/wp-content/themes/` (or install from a zip via Appearance → Themes → Add New → Upload).
2. Go to Appearance → Themes and activate "Luan Piegas".
3. Visit the site. No setup, widgets, or companion plugins required.


== Frequently Asked Questions ==

= How does dark mode work? =

The theme follows the visitor's OS preference out of the box. The bulb button in the header overrides it manually, and the choice is remembered for return visits.

= I edited something in the Site Editor and the design broke. Why? =

Saving a template, template part, or global style in the Site Editor stores a copy in the database that overrides the theme's files — including the color system dark mode depends on. To go back to the theme as designed, delete the override under Appearance → Editor (or via WP-CLI: `wp post delete <id> --force` for the `wp_template`, `wp_template_part`, or `wp_global_styles` post).


== Changelog ==

= 2.0.5 =
* Readme overhaul: accurate metadata, usage notes, full changelog

= 2.0.4 =
* Mobile side padding for content, header and footer

= 2.0.3 =
* SVG bulb icons for the dark/light toggle with swap animation

= 2.0.2 =
* Monochrome palette, read-more links, excerpts removed from index

= 2.0.1 =
* Heading color guard so Site Editor customizations can't break dark mode

= 2.0.0 =
* Theme rebuild: split templates (home, single, page, archive, search, 404),
  design tokens, dark mode, minimal dev-blog styling

= 1.0.0 =
* Initial release


== Copyright ==

Luan Piegas WordPress Theme, (C) 2026 Luan Piegas
Luan Piegas is distributed under the terms of the GNU GPL.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

