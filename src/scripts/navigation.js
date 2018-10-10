/*
 FILE NAME: scripts/navigation.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: For modularity; Create navigation bar and footer. 
 */

import * as Turbo from './turbo.js';
import routes from './routes.js';

export default Turbo.renderRoutes(routes);