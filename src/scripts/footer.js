/*
 FILE NAME: scripts/footer.js
 WRITTEN BY: Magnus L. Holtet
 WHEN: October 2018
 PURPOSE: For cleaner code.
 */

import * as Spark from './spark.js';


// TODO: Fix fields in footer
// To be displayed in the footer
const fields = [
  'Contact: contact@droneloan.com', 
  'Address: Advokat Allé 5C', 
  '&copy; DroneLOAN 2018'
];

// Create the footer.
export default Spark.createElement(
  'ul',
  {
    className: 'container'
  },
  fields.map(field => Spark.createElement(
    'li', 
    null, 
    [field]
  ))
);