/*
 FILE NAME: scripts/index.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: For modularity; Create navigation bar and footer. 
 */

// Import Spark along with
import * as Spark from './spark.js';
import navigation from './navigation.js';
import footer from './footer.js';

// Render navigation bar
Spark.render (
  document.getElementById('navigation'),
  navigation
);

// Render footer
Spark.render(
  document.getElementById('footer'),
  footer
);
