/*
 FILE NAME: scripts/footer.js
 WRITTEN BY: Magnus.
 WHEN: October 2018
 PURPOSE: For cleaner code.
 */

import * as Spark from './spark.js';

// TODO: Fix fields in footer
// To be displayed in the footer
const fields = [
  'contact@droneloan.com', 
  'Høgskoleringen 1, 7491 Trondheim', 
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
    [
      field
    ]
  ))
);