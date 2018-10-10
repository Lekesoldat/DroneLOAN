/*
 FILE NAME: scripts/footer.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: For cleaner code.
 */

import * as Rocket from './rocket.js';

// To be displayed in the footer
const fields = [
  'Contact: contact@droneloan.com', 
  'Address: Advokat Allé 5C', 
  '&copy; DroneLOAN 2018'
];

// Create the footer.
export default Rocket.createElement(
  'ul',
  null,
  fields.map(field => Rocket.createElement(
    'li', 
    null, 
    [field]
  ))
);