/*
 FILE NAME: scripts/index.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: For modularity; Create navigation bar and footer. 
 */

// Import Rocket along with
import * as Rocket from './rocket.js';
import navigation from './navigation.js';
import footer from './footer.js';

// Render navigation bar
Rocket.render (
  document.getElementById('navigation'),
  navigation
);

// Render footer
Rocket.render(
  document.getElementById('footer'),
  footer
);
