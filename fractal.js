'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Scott Nath Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/patterns/templates');
fractal.components.set('default.preview', '@preview--default');

// custom fractal properties for preview file
fractal.components.set('preview', {});
fractal.components.set('preview.css', {
  default: '/styles/css/styles.css',
});
// fractal.components.set('preview.js', [
//   { file: '/watson-health.min.js' },
//   { file: '/carbon.min.js' },
// ]);


/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/global-assets');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');
