/*
 FILE NAME: scripts/index.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: For modularity; Create navigation bar.
 */
import * as Rocket from './rocket.js';
import * as Turbo from './turbo.js';
import routes from './routes.js';

// Render navigation bar
Rocket.render (
  document.getElementById('navigation'),
  Turbo.renderRoutes(routes)
);
