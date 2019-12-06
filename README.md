# Custom-Block-Code

## Installation
To use this plugin, you only have to create a folder (custom-block-code) in your wordpress website from `wp-content/wp-plugin` and copy/paste the files in. Then go to your wordpress extension admin page and activate the plugin.

## Purpose
This plugin is just an exemple of how to integrate [Wordpress core library](https://github.com/WordPress/gutenberg/tree/master/packages/block-library) into your custom [gutenberg](https://github.com/WordPress/gutenberg) block. There is no easy way to add core blocks in your code. You need to pass through the [InnerBlocks](https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks) component to access the core library. It's a little strange when you know there is the `wp.blockLibrary` object available.

## Using
In fact I just need to apply a title and a class (to activate the [google code prettify](https://github.com/google/code-prettify)) to the Code Block provide by Wordpress. This is a pretty way to highlight code in your page.

Don't forget to include the script tag below in your Wordpress header.php file theme to activate the google pretty code plugin:
```HTML
<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
```
