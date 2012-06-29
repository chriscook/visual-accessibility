Visual Accessibility
====================

Version 1.0
-----------

### Introduction

__Visual Accessibility__ is a _jQuery_ plug-in which gives the user a number of visual accessibility options.

### How to use it

1. Add `jquery.visualAccessibility.js` to your project, along with _jQuery_.
2. Add the following JavaScript to your page, to be executed on load:

```javascript
	$('#container').visualAccessibility();
```

...where `#container` is a selector for the page container.

A demo is available in demo.html.

### Additional settings

Additional settings can be used to customise the keyboard, and should be added as a parameter within curly braces:

+ `textSize`: Whether or not the text size controls appear (default `true`; must be boolean).
+ `colourSchemes`: An array of objects containing background/text colour schemes (default is an array of black on white and white on black; must be an array of objects).

An example of these in practice:

```javascript
	$('#container').visualAccessibility({
		textSize: false,
		colourSchemes: [{
			background: '#FF0000',
			color: '#111111'
		}, {
			background: '#00FF00',
			color: '#000000',
		}]
	});
```

There is no styling applied to the container by default, except for the background and text colour of the buttons which activate those particular styles.

### Author and acknowledgements

+ Written by [Chris Cook](http://chris-cook.co.uk)
