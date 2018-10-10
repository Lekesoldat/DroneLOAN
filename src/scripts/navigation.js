/*
 FILE NAME: scripts/navigation.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: For cleaner code. Not particulary necessary for the navigation bar, but for footer.
 */

import * as Orbit from './orbit.js';
import routes from './routes.js';

// Export 'ul' with all list items embedded.
export default Orbit.renderRoutes(routes);