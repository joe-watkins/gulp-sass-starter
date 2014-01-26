# Gulp.js Sass Starter

This is a simple starter for commando Sass work. Great for poking around and learning how to configure gulp.js and easy to inject into projects. You'll need [node.js](http://nodejs.org/) and [gulp.js](http://gulpjs.com/) installed.

## Instructions:
 
	$ npm install

	$ gulp watch

	Edit /styles/main.scss -> save

Gulp will create a main.min.css and a main.css file in the /styles dir.

## Add to an existing project

1.Copy package.json and gulpfile.js to your project's root.

1.Edit the stylesDir variable on line #9 of gulpfile.js to tell gulp where your styles are.

3.Open terminal and cd to your project's folder then run these commands

	$ npm install
	$ gulp watch